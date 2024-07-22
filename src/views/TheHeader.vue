<template>
  <div id="header">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-2 col-2">
          <div class="header-item menu">
            <label for=""><i class="bi bi-list"></i> <span>Menu</span></label>
            <label for="" class="translate-btn"
              ><i class="bi bi-translate"></i> <span>VI</span></label
            >
          </div>
        </div>
        <div class="col-md-8 col-8">
          <div class="header-item text-logo header-item-logo">
            <h1 class="text-lg text-center"><a href="" style="color: unset; text-decoration: none;">Đổi Font Chữ</a></h1>
          </div>
        </div>
        <div class="col-md-2 col-2">
          <div class="header-item dark-mode">
            <label for=""><i class="bi bi-moon-stars"></i></label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
#header {
  background-color: #f8f8f8;
  padding: 10px 0;
  border-bottom: 1px solid #e2e3e5;
}

#header .header-item h1 {
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 0;
}

#header .header-item:first-child {
  padding-left: 30px;
  text-align: right;
}


#header .header-item:last-child label {
  cursor: pointer;
  padding: 10px 16px;
  border-radius: 4px;
  transition:  0.3s;
}

#header .header-item:last-child label:hover {
  background-color: #ccced1;
}

#header .header-item:first-child label:last-child {
  margin-left: 10px;
}

#header .header-item:first-child label:first-child,
label:last-child:hover {
  cursor: pointer;
}

#header .menu label:first-child,
label:last-child {
  padding: 10px 16px;
  border-radius: 4px;
  transition: 0.3s;
}

#header .menu label:first-child:hover {
  background-color: #ccced1;
}

#header .menu label:last-child:hover {
  background-color: #ccced1;
}

@media screen and (max-width: 768px) {
  .text-lg {
    font-size: 1.125rem !important;
    margin-bottom: 0;
  }

  #header .header-item:first-child {
  padding-left: unset;
  text-align: unset;
}

#header .header-item:first-child label.translate-btn {
    display: none;
}

#header .header-item:first-child {
  text-align: unset;
}

#header .header-item-logo {
    padding-top: 10px !important;
    padding-right: unset !important;
}

#header .header-item:first-child label:last-child {
  margin-left: unset;
}


#header .menu label:first-child span {
    display: none;
}


}
</style>
