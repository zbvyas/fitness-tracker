import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {

  @Output() trainingStart = new EventEmitter<void>();
  exercises: Exercise[] = [];

  exerciseForm: FormGroup;
  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.exerciseForm = new FormGroup({
      id: new FormControl('')
    });
    this.exercises = this.trainingService.getAvailableExercises();
  }

  onStartTraining() {
    this.trainingService.startExercise(this.exerciseForm.controls['id'].value);
  }

}
