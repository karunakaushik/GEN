import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent {
  
  filename = "textFile";

  text: FormControl = new FormControl('');
  constructor(private fb: FormBuilder) { };

  ngOnInit() {
    this.text = this.fb.control('');
  }
  onUpperCase() {
    let w = this.text.value;
    const p = w.toUpperCase();
    this.text.setValue(p);
    console.log(w);
  }
  onLowerCase() {
    let w = this.text.value;
    let p = w.toLowerCase();
    this.text.setValue(p);
  }
  onCapitalizedCase() {
    let w = this.text.value;
    let arr = w.split(" ");
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substr(1).toLowerCase();
    }
    let p = arr.join(" ");
    this.text.setValue(p);
    console.log(p);
  }
  onDownload(filename: any) {
    let w = this.text.value;
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(w));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }
  removeExtraSpace() {
    let w = this.text.value;
    let p = w.replace(/\s+/g, ' ').trim();
    this.text.setValue(p);
  }
  allClear() {
    let w = this.text.value;
    let p = '';
    this.text.setValue(p);
    console.log(p);
  }
  CopyToClipBoard(copyTarget: any) {
    // const copyTarget = this.text.value;
    copyTarget.select();
    document.execCommand('copy');
    copyTarget.setSelectionRange(0, 0);
  }
}
