import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { TrainingService } from '../training.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Exercise } from '../exercise.model';
import { Store } from "@ngrx/store";
import { Observable } from 'rxjs';
import * as fromRoot from './../../app.reducer';
import * as UI from './../../shared/ui.actions';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit, OnDestroy {

  @Output() trainingStart = new EventEmitter<void>();
  exercises: Exercise[];
  exerciseSubscription: Subscription;
  exerciseForm: FormGroup;

  isLoading$: Observable<boolean>;

  constructor(
    private trainingService: TrainingService,
    private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.isLoading$ = this.store.select(fromRoot.getIsLoading);
    this.exerciseForm = new FormGroup({
      id: new FormControl('')
    });
    this.exerciseSubscription = this.trainingService.exercisesChanged.subscribe(
      exercises => {
        this.exercises = exercises;
        this.store.dispatch(new UI.StopLoading());
      }
    );
    this.fetchExercises();
  }

  ngOnDestroy() {
    if(this.exerciseSubscription) {
      this.exerciseSubscription.unsubscribe(); 
    }
  }

  fetchExercises() {
    this.trainingService.fetchAvailableExercises();
  }
  onStartTraining() {
    this.trainingService.startExercise(this.exerciseForm.controls['id'].value);
  }

}
