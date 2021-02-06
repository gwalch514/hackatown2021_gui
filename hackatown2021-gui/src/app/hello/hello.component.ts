import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgOpenCVService, OpenCVLoadResult } from 'ng-open-cv';
import { fromEvent, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  openCVLoadResult: Observable<OpenCVLoadResult>;

  constructor(private ngOpenCVService: NgOpenCVService) { }
  
  @ViewChild('fileInput')
  fileInput: ElementRef;
  @ViewChild('canvasOutput')
  canvasOutput: ElementRef;
  
  ngOnInit(): void {
    this.openCVLoadResult = this.ngOpenCVService.isReady$;
  }

  loadImage(event) {
    if (event.target.files.length) {
      const reader = new FileReader();
      const load$ = fromEvent(reader, 'load');
      load$
        .pipe(
          switchMap(() => {
            return this.ngOpenCVService.loadImageToHTMLCanvas(`${reader.result}`, this.canvasOutput.nativeElement);
          })
        )
        .subscribe(
          () => {},
          err => {
            console.log('Error loading image', err);
          }
        );
      reader.readAsDataURL(event.target.files[0]);
    }
  }
}
