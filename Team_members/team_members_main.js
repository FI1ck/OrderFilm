document.addEventListener("DOMContentLoaded", function() {
    var activeLanguage = localStorage.getItem('activeLanguage');
    var armenian_button = document.getElementById('armenian_lang');
    var english_button = document.getElementById('english_lang');
    var english_text = document.getElementsByClassName('english')
    var armenian_text = document.getElementsByClassName('armenian');
    var names = document.getElementsByClassName('team_name');
    var full_name_span = document.getElementById('full_name');
    var role_span = document.getElementById('role');
    var people_pic = document.getElementById('people_picture');
    var people_projects = document.getElementById('projects');
    var clickedPoster;

    /*
        Projects

        "Images/david.jpg", 
        "Images/zulali.jpg",
        "Images/Robert.png", 
        "Images/ohan.jpg",
        "Images/mansuryan.png",
        "Images/Gurgen.png",
        "Images/song_and_i.jpg",
        "Images/martakanon.jpg", 
        "Images/kurwa1.jpg",
        "Images/olimp.png",
        "Images/tatul.png", 
        "Images/xoren.png", 
        "Images/frunz.png", 
        "Images/kalencner.png"

    */

    var people_project_names = {
        "../Images/david.jpg": "Դավիթի Այգին",
        "../Images/zulali.jpg": "Զուլալի",
        "../Images/Robert.png": "Սիրտն Իմ",
        "../Images/ohan.jpg": "Գեղեցիկ Դադարից առաջ",
        "../Images/mansuryan.png": "Մաեստրո Մանսուրյան",
        "../Images/Gurgen.png": "Գուրգեն Մուշեղյան",
        "../Images/song_and_i.jpg": "Երգն ու Ես",
        "../Images/martakanon.jpg": "Մարտականոն",
        "../Images/olimp.png": "Զուլալի",
        "../Images/tatul.png": "Թաթուլ Կրպեյան",
        "../Images/xoren.png": "Խորեն Աբրահամյան",
        "../Images/frunz.png": "Ֆրունզիկ Մկրտչյան",
        "../Images/kalencner.png": "Կալենցներ",
    }

    var people_names_EN = [
        'Hayk Ordyan','Ani Ordyan','Lusine Mirzoyan','Yervand Rumyan',
        'Arman Ayvazyan','Garush Ghazaryan','Hayk Mkrtchyan','Arman Ordyan',
        'Frunze Ghazaryan', 'Vahe Terteryan','Alina Ordyan','Sara Nalbandyan',
        'Ani Kapzmalyan','Gayane Sargsyan','Eva Suquasian','Narek Ordyan'
    ]

    var people_names_AM = [
        'Հայկ Օրդյան', 'Անի Օրդյան', 'Լուսինե Միրզոյան', 'Երվանդ Ռումյան',
        'Արման Այվազյան', 'Գարուշ Ղաազարյան', 'Հայկ Մկրտչյան', 'Արման Օրդյան',
        'Ֆրունզե Ղազարյան','Վահե Տերտերյան', 'Ալինա Օրդյան', 'Սառա Նալբանդյան',
        'Անի Կապզմալյան', 'Գայանե Սարգսյան', 'Եվա Սուքիասյան', 'Նարեկ Օրդյան'
    ]

    var roles_AM = [
        'Տնօրեն','Գործադիր Պրոդյուսեր','Գործադիր Պրոդյուսեր','Ռեժիսոր',
        'Ռեժիսոր','Ռեժիսոր','Ռեժիսոր','Օպերատոր',
        'Օպերատոր','Օպերատոր','Սցենարիստ','Սցենարիստ',
        'Ռեժիսորի Ասիստենտ','Գծային Պրոդյուսեր','Գծային Պրոդյուսեր','Տեխնիկական Սպասարկող',
    ]

    var roles_EN = [
        'CEO','Executive Producer','Executive Producer','Director',
        'Director','Director','Director','Director of Photography',
        'Director of Photography','Director of Photography','Screenwriter','Screenwriter',
        'Director Assistant','Line Producer','Line Producer','Tech Support',
    ]

    var people_images = [
        '../Images/people/Hayk_Ord.jpeg','../Images/people/Ani_ord.jpeg','../Images/people/Lusine.jpeg','../Images/people/Yervand.jpeg',
        '../Images/people/arman_ayvazyan.jpeg','../Images/people/Garush.jpeg','../Images/people/Hayk.jpeg','../Images/people/Arman_ord.jpeg',
        '../Images/people/frunz.jpeg','../Images/people/Vahe.jpeg','../Images/people/Alina.jpeg','../Images/people/',
        '../Images/people/Ani.jpeg','../Images/people/Gayane.jpeg','../Images/people/Eva.jpeg','../Images/people/narek.jpg',
    ]

    var people_projects_arr = [];

    console.log(full_name_span);

    var clickedIndex = localStorage.getItem('clickedIndex') !== null ? parseInt(localStorage.getItem('clickedIndex')) : -1;
   
    for (var i = 0; i < names.length; i++) {
        names[i].addEventListener('click', function() {
            clickedIndex = Array.from(names).indexOf(this);
            console.log('Index of clicked element:', clickedIndex);
            localStorage.setItem('clickedIndex', clickedIndex);
            
        });
    }

    GetPeopleNames();
    GetPeopleRoles();
    GetPeopleImages();
    GetPeopleProjects();

    function GetPeopleNames(){
        if (activeLanguage == 'Armenian') {
            full_name_span.textContent = people_names_AM[Math.floor(clickedIndex / 2)];
        }

        else{
            full_name.textContent = people_names_EN[Math.floor(clickedIndex / 2)];
        }
    }

    function GetPeopleRoles(){
        if (activeLanguage == 'Armenian') {
            role_span.textContent = roles_AM[Math.floor(clickedIndex / 2)];
        }

        else{
            role_span.textContent = roles_EN[Math.floor(clickedIndex / 2)];
        }
    }

    function GetPeopleImages(){
        people_pic.style.backgroundImage = "url(" + people_images[Math.floor(clickedIndex / 2)] + ")";
        console.log(people_pic);
    }
    
 

    function translateToEnglish() {
        activeLanguage = 'English'; // Set active language to English
        localStorage.setItem('activeLanguage', activeLanguage);
        for (var i = 0; i < armenian_text.length; i++) {
            armenian_text[i].style.display = 'none';
            armenian_button.style.backgroundColor = 'transparent';
            armenian_button.style.color = '#fff';
        }
        for (var j = 0; j < english_text.length; j++) {
            english_text[j].style.display = 'block';
            english_button.style.backgroundColor = '#fff';
            english_button.style.color = '#000';
        }
        GetPeopleNames();
        GetPeopleRoles();
    }
    
    function translateToArmenian(){
        activeLanguage = 'Armenian'; // Set active language to Armenian
        localStorage.setItem('activeLanguage', activeLanguage);
        for (var i = 0; i < english_text.length; i++) {
            english_text[i].style.display = 'none';
            english_button.style.backgroundColor = 'transparent';
            english_button.style.color = '#fff';
        }
        for (var j = 0; j < armenian_text.length; j++) {
            armenian_text[j].style.display = 'block';
            armenian_button.style.backgroundColor = '#fff';
            armenian_button.style.color = '#000';
        }
        GetPeopleNames();
        GetPeopleRoles();
    }


    function GetPeopleProjects(){
        switch (clickedIndex) {
            case 0:
            case 1:
                people_projects_arr = [
                    "../Images/david.jpg", 
                    "../Images/zulali.jpg",
                    "../Images/Robert.png", 
                    "../Images/ohan.jpg",
                    "../Images/mansuryan.png",
                    "../Images/Gurgen.png",
                    "../Images/song_and_i.png",
                    "../Images/martakanon.jpg", 
                    "../Images/kurwa1.jpg",
                    "../Images/olimp.png",
                    "../Images/tatul.png", 
                    "../Images/xoren.png", 
                    "../Images/frunz.png", 
                    "../Images/kalencner.png"
                ];
                break;
            case 2:
            case 3:
                people_projects_arr = [
                    "../Images/zulali.jpg",
                    "../Images/Robert.png",
                    "../Images/ohan.jpg",
                    "../Images/mansuryan.png"
                ];
                break;
            case 4:
            case 5:
                people_projects_arr = [
                    "../Images/zulali.jpg",
                    "../Images/Robert.png",
                    "../Images/ohan.jpg",
                    "../Images/mansuryan.png"
                ];
                break;
            case 6:
            case 7:
                people_projects_arr = [
                "../Images/zulali.jpg",
                "../Images/Robert.png",
                "../Images/ohan.jpg",
                "../Images/mansuryan.png"
            ];
            break;

            case 8:
            case 9:
                people_projects_arr = [
                    "../Images/zulali.jpg",
                    "../Images/Robert.png",
                    "../Images/ohan.jpg",
                    "../Images/mansuryan.png"
                ];
                break;

            case 10:
            case 11:
                people_projects_arr = [
                    "../Images/zulali.jpg",
                    "../Images/david.jpg",
                    "../Images/ohan.jpg",
                    "../Images/mansuryan.png"
                ];
                break;

            case 12:
            case 13:
                people_projects_arr = [
                    "../Images/zulali.jpg",
                    "../Images/Robert.png",
                    "../Images/ohan.jpg",
                    "../Images/mansuryan.png"
                ];
                break;

            case 14:
            case 15:
                people_projects_arr = [
                    "../Images/zulali.jpg",
                    "../Images/Robert.png",
                    "../Images/ohan.jpg",
                    "../Images/mansuryan.png"
                ];
                break;

            case 16:
            case 17:
                people_projects_arr = [
                    "../Images/zulali.jpg",
                    "../Images/Robert.png",
                    "../Images/ohan.jpg",
                    "../Images/mansuryan.png"
                ];
                break;

            case 18:
            case 19:
                people_projects_arr = [
                    "../Images/zulali.jpg",
                    "../Images/Robert.png",
                    "../Images/ohan.jpg",
                    "../Images/mansuryan.png"
                ];
                break;

            case 20:
            case 21:
                people_projects_arr = [
                    "../Images/david.jpg", 
                    "../Images/zulali.jpg",
                    "../Images/mansuryan.png",
                    "../Images/ohan.jpg",
                    "../Images/frunz.png",
                    "../Images/tatul.png",
                    "../Images/kalencner.png"
                ];
                break;

            case 22:
            case 23:
                people_projects_arr = [
                    
            ];
                break;

            case 24:
            case 25:
                people_projects_arr = ["../Images/zulali.jpg"];
                break;

            case 26:
            case 27:
                people_projects_arr = [
                    "../Images/david.jpg",
                ];
                break;

            case 28:
            case 29:
                people_projects_arr = ["../Images/zulali.jpg"];
                break;

            case 30:
            case 31:
                people_projects_arr = ["../Images/zulali.jpg"];
                break;

            default:
                return;
        }
    
        for (var i = 0; i < people_projects_arr.length; i++) {
            var people_project = document.createElement('a');
            people_project.href = "../projects/projects_index.html";
            people_project.className = 'project';
            people_projects.appendChild(people_project);
            people_project.style.backgroundImage = "url(" + people_projects_arr[i] + ")";
            // var people_project_name = document.createElement('span');
            // people_project_name.className - 'project_name';
            // people_project.appendChild(people_project_name);
            
        }
    }

    if (activeLanguage == 'Armenian') {
        translateToArmenian();
    }

    else{
        translateToEnglish();
    }

    document.querySelectorAll('.project').forEach(function(poster) {
        poster.addEventListener('click', function(event) {
            clickedPoster = window.getComputedStyle(event.target).getPropertyValue('background-image');
            localStorage.setItem("clickedPoster", clickedPoster);

            
            // Do something with the clicked poster background
            console.log(clickedPoster); // For example, log it to the console
        });
    });

    armenian_button.addEventListener('click', translateToArmenian);
    english_button.addEventListener('click', translateToEnglish);
});