<template>
    <div id="header" class="d-flex justify-content-between align-items-center">
        <div class="header-item menu"><label for=""><i class="bi bi-list"></i> Menu</label> <label for=""><i class="bi bi-translate"></i> <span>VI</span></label></div>
        <div class="header-item text-logo"><h1 class="text-lg">Đổi Font Chữ</h1></div>
        <div class="header-item dark-mode"><label for=""><i class="bi bi-moon-stars"></i></label></div>
    </div>
</template>

<style scoped>
    #header {
        background-color: #F8F8F8;
        padding: 10px 0;
        border-bottom: 1px solid #E2E3E5;
    }

    #header .header-item h1 {
        font-size: 1.875rem;
        font-weight: 700;
        margin-bottom: 0;
    }

    #header .header-item:first-child{
        padding-left: 30px;
    }

    #header .header-item:last-child{
        padding-right: 30px;
    }

    #header .header-item:last-child label{
        cursor: pointer;
        padding: 10px 16px;
        border-radius: 3px;
    }

    #header .header-item:last-child label:hover{
        background-color: #CCCED1;
    } 

    #header .header-item:first-child label:last-child{
        margin-left: 10px;
    }
    
    #header .header-item:first-child label:first-child, label:last-child:hover {
        cursor: pointer;
        
    }

    #header .menu label:first-child, label:last-child {
        padding: 10px 16px;
        border-radius: 3px;
    }

    #header .menu label:first-child:hover {
        
        background-color: #CCCED1;
    }

    #header .menu label:last-child:hover {
        
        background-color: #CCCED1;
    }

    @media screen and (max-width: 431px) {
        .text-lg {
            font-size: 1.125rem !important;
            margin-bottom: 0;
        }

        #header .header-item:first-child label:last-child{
            display: none;
        } 
    }
</style>