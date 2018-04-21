import { Component, Input, OnInit, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'ngx-tawk'
})
export class NgxTawkComponent implements OnInit {
  @Input() id: string;

  constructor(private _renderer: Renderer2, @Inject(DOCUMENT) private _document, ) {}

  ngOnInit() {
    const s = this._renderer.createElement('script');
    s.text = `var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/${this.id}/default';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
    })();`;
    this._renderer.appendChild(this._document.body, s);
  }
}
