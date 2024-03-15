document.write(
  '\
    <section class="section-about-us container">\
    <div class="title-arrow_wrapper">\
      <h4 class="about-us_title">Почему мы?</h2>\
        <div class="title-arrow"></div>\
    </div>\
    <article class="article-about-us">\
      <picture class="about-us_img">\
        <!-- <source srcSet={avifPath2x} type="image/avif" media="(min-resolution: 2dppx)" />\
          <source srcSet={avifPath1x} type="image/avif" />\
          <source srcSet={webpPath2x} type="image/webp" media="(min-resolution: 2dppx)" />\
          <source srcSet={webpPath1x} type="image/webp" />\
          <source srcSet={pngPath2x} type="image/png" media="(min-resolution: 2dppx)" />\
          <source srcSet={pngPath1x} type="image/png" />\
          <source srcSet={jpgPath2x} type="image/jpg" media="(min-resolution: 2dppx)" /> -->\
        <img src="./public/img/Form390x270.png" alt="Form390x270" />\
      </picture>\
      <img src="./public/img/SomethingShit.svg" alt="SomethingShit.svg" class="shit-img">\
      <span class="step">02</span>\
      <div class="about-us_information">\
        <h6 class="about-us_information__title">Мы можем:</h6>\
        <ul class="form-repair_list about-us_information__list">\
          <li class="form-repair_item about-form_subtext">выявить проблемы</li>\
          <li class="form-repair_item about-form_subtext">разработать необходимую конструкторскую и технологическую\
            документацию</li>\
          <li class="form-repair_item about-form_subtext">провести процедуру ремонта.</li>\
        </ul>\
      </div>\
    </article>\
  </section>\
      '
);
