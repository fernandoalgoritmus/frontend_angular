import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  $(document).ready(() => {
    let atualSlide: number = 1;
    let listSlide: string[] = ["banner-f1", "banner-car", "banner-cs", "banner-lol"];
    
    setInterval(changeSlide, 2000);

    function changeSlide(): void {
        if (atualSlide > 0) {
            $("#carousel").removeClass(listSlide[atualSlide - 1]);
        } else {
            $("#carousel").removeClass(listSlide[listSlide.length - 1]);
        }
        
        $("#carousel").addClass(listSlide[atualSlide]);
        atualSlide++;

        if (atualSlide > listSlide.length - 1) {
            atualSlide = 0;
        }
    }

    $('#bars').click(() => {
        if ($('#menu').hasClass('menu-ativo')) {
            $('#menu').removeClass('menu-ativo');
        } else {
            $('#menu').addClass('menu-ativo');
        }
    });
});