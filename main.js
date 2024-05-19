document.addEventListener("DOMContentLoaded", function() {
    const screenWidth = window.innerWidth;
    var media_name = document.getElementsByClassName('name')[0];
    var media_type = document.getElementsByClassName('type')[0];
    var media_date = document.getElementsByClassName('date')[0];
    var project_posters_container = document.getElementsByClassName('posters')[0];
    var project_posters_container_uf = document.getElementsByClassName('posters_unfinished')[0];
    var indicators = document.getElementsByClassName('indicators')[0];
    var projects_right_arrow = document.getElementById('arrow_right');
    var projects_left_arrow = document.getElementById('arrow_left');
    var partners_logo = document.getElementsByClassName('partners_logo');
    var partners_name = document.getElementsByClassName('partners_name');
    var armenian_button = document.getElementById('armenian_lang');
    var english_button = document.getElementById('english_lang');
    var english_text = document.getElementsByClassName('english')
    var armenian_text = document.getElementsByClassName('armenian');
    var filter_btn = document.getElementById('project_filter');
    var project_filter = document.getElementsByClassName('filter');
    var film_checkboxes = document.getElementsByClassName('film_filter');
    var tv_checkbox = document.getElementsByClassName('tv_filter');
    var anim_checkbox = document.getElementsByClassName('anim_filter');
    var checkboxes = document.getElementsByClassName('filter_checkbox');
    var menu_btn = document.getElementById('header_menu_btn_js');
    var video_prev_btn = document.getElementById('video_prev');
    var video_next_btn = document.getElementById('video_next');
    var audio_btn = document.getElementById('audio');
    var activeLanguage = localStorage.getItem('activeLanguage') || 'English';
    var clickedPoster;
    localStorage.setItem('activeLanguage', activeLanguage);

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
        GetNames();
        GetTypes();
        GetPartnerNames();
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
        GetNames();
        GetTypes();
        GetPartnerNames();
    }

  // Convert checkboxes to an array

    function DelIndicator(arr) {
        let indicators = document.querySelectorAll('.indicator');
        for (let i = 0; i < indicators.length; i++) {
            indicators[i].remove()
        }

        let arr_size = document.querySelectorAll('.projects_poster').length - arr.length;
        console.log(arr_size);
        GetIndicatorContent(Array.from( {length: arr_size} ));
    }

    function GetIndicatorContent(arr){
        for (let i = 0; i < arr.length; i++) {
            let indicator = document.createElement('div');
            indicator.className = 'indicator';
            indicators.appendChild(indicator);  
        }
    }

    function DelPostersContent(arr) {
        let posters = document.querySelectorAll('.projects_poster');
        if (arr === project_posters_films) {
            for (let i = 0; i < posters.length; i++) {
                if (posters[i].classList.contains("project_films")) {
                    console.log('Match!')
                    posters[i].remove();
                }
            }
        } else if (arr === project_posters_tv) {
            for (let i = 0; i < posters.length; i++) {
                if (posters[i].classList.contains("project_tv")) {
                    console.log('Match!')
                    posters[i].remove();
                }
            }
        } else if (arr === project_posters_documentary) {
            for (let i = 0; i < posters.length; i++) {
                if (posters[i].classList.contains("project_docs")) {
                    console.log('Match')
                    posters[i].remove();
                }
            }
        }
    }
    
    function GetPostersContent(arr) {
        for (let i = 0; i < arr.length; i++) {
    
            let project_poster = document.createElement('a');
            
            if (arr == project_posters_films) {
                project_poster.classList.add("projects_poster", "project_films")
            }

            else if(arr == project_posters_documentary){
                project_poster.classList.add("projects_poster", "project_docs")
            }
            else if(arr == project_posters_tv){
                project_poster.classList.add("projects_poster", "project_tv")
            }

            project_poster.href = 'projects/projects_index.html';
            project_poster.style.backgroundImage = "url(" + arr[i] + ")";

            project_posters_container.appendChild(project_poster);
        }
    }

    function GetUnfinishedPosterContent(arr){
        for (let i = 0; i < arr.length; i++) {
            let project_poster = document.createElement('a');
            project_poster.classList.add('projects_poster_unfinished');
            project_poster.href = 'projects/projects_index.html';
            project_poster.style.backgroundImage = "url(" + arr[i] + ")";
            project_posters_container_uf.appendChild(project_poster);

        }
    }

    const videoSources = [
        "Videos/david.mp4",
        "Videos/Zulali.mp4",
        "Videos/maestro.mp4",
        "Videos/mushexyan.mp4",
        "Videos/sirtn_im.mp4"
    ];

    
    const partner_names_arr = [
        "Հայաստանի Ազգային Կինոկենտրոն",
        "Հայաստանի Հանրային Հեռուստա-ընկերություն",
        "ԿԳՄՍՆ",
        "ԴԱՐ Հիմնադրամ",
        "Բերդ Մշակույթի կենտրոն",
        "Իրական Դպրոց",
        "Ինսթիգեյթ Ռոբոտիքս",
        "Ֆինտաքս Աքաունթինք",
        "ԱՀԱՐՈՆՅԱՆ ԼՈ ՖԻՐՄ",
        "Բեքգրաունդ Փրոդաքշն",
        "ԱՄՈՒ",
    ]

    const partner_namesEN_arr = [
        "NCCA",
        "Public Television of Armenia",
        "ESCS",
        "DAR Foundation",
        "BERD cultural center",
        "Real School",
        "Instigate Robotics",
        "Fintax accounting",
        "Aharonyan Law Firm",
        "Background Production",
        "AMU",
    ]

    const partner_logo_arr = [
        "Images/Partners/NCCA.png",
        "Images/Partners/H1.png",
        "Images/Partners/KGSM.png",
        "Images/Partners/Dar.png",
        "Images/Partners/bmk.png",
        "Images/Partners/dproc.png",
        "Images/Partners/Instigate.png",
        "Images/Partners/fintax.png",
        "Images/Partners/aharonyan.png",
        "Images/Partners/background.png",
        "Images/Partners/amu.png",
    ];

    const project_posters_arr = [
        "Images/david.jpg", 
        "Images/zulali.jpg",
        "Images/dragonfly.jpg",
        "Images/Robert.png", 
        "Images/ohan.jpg",
        "Images/mansuryan.png",
        "Images/Gurgen.png",
        "Images/martakanon.jpg", 
        "Images/kurwa1.jpg",
        "Images/olimp.png",
        "Images/tatul.png", 
        "Images/xoren.png", 
        "Images/frunz.png", 
        "Images/kalencner.png",
        "Images/svetlana.png"
    ];

    const project_posters_documentary = [
        "Images/tatul.png", 
        "Images/xoren.png", 
        "Images/frunz.png", 
        "Images/kalencner.png",
        "Images/svetlana.png"
    ]

    const project_posters_tv = [
        "Images/olimp.png",
        "Images/martakanon.jpg",
    ]

    const project_posters_films = [
        "Images/david.jpg", 
        "Images/zulali.jpg",
        "Images/dragonfly.jpg",
        "Images/Robert.png", 
        "Images/ohan.jpg",
        "Images/mansuryan.png",
        "Images/Gurgen.png",
        "Images/song_and_i.png",
        "Images/kurwa1.jpg",
    ];

    const unfinished_posters_arr = [
        "Images/komitas.png",
        "Images/song_and_i.png",
    ]
    
    const names = ["Դավիթի Այգին","Զուլալի", "Մաեստրո Մանսուրյան", "Գուրգեն Մուշեղյան", "Սիրտն Իմ"];
    const namesEN = ["David's Garden", "Zulali", "Maestro Mansuryan", "Gurgen Musheghyan", "My Heart"];
    const animation = [];
    const tv_shows = [];
    const tv_shows_EN = [];
    const films = ["Դավիթի Այգին", "Զուլալի", "Մաեստրո Մանսուրյան", "Գուրգեն Մուշեղյան", "Սիրտն Իմ"];
    const filmsEN = ["David's Garden", "Zulali", "Maestro Mansuryan", "Gurgen Musheghyan", "My Heart"];
    const dates = ["2024","2021", "2019", "2021", "2021"];

    let poster_index = 0;
    let currentVideoIndex = 0;
    let video_duration = 0;
    var filter_count = 1;
    let mute_click_count = 0;

    function GetPartnerLogos() {
        for (let i = 0; i < partners_logo.length; i++) {
            if (partner_logo_arr[i]) {
                partners_logo[i].style.backgroundImage = "url(" + partner_logo_arr[i] + ")";
            } else {
                console.error("Not enough elements with class 'partners_logo' to set all logos.");
                break;
            }
        }
    }

    function GetPartnerNames() {
        for (let i = 0; i < partners_name.length; i++) {
            if (activeLanguage == 'English'){
                partners_name[i].textContent = partner_namesEN_arr[i];
            } 
            
            else if(activeLanguage == 'Armenian'){
                partners_name[i].textContent = partner_names_arr[i];
            }

            else {
                console.error("Not enough elements with class 'partners_name' to set all names.");
                break;
            }
        }
    }

    filter_btn.addEventListener('click', function(){
        console.log('filter btn clicked');
        if (filter_count % 2 != 0) {
            for (let i = 0; i < project_filter.length; i++) {
                project_filter[i].style.opacity = '100';
            }
        }

        else{
            for (let i = 0; i < project_filter.length; i++) {
                project_filter[i].style.opacity = '0';
            } 
        }
        filter_count++;
        
    })

    function GetNames(){
        console.log("Setting name:", names[currentVideoIndex]);
        if (activeLanguage === 'English') {
            media_name.textContent = namesEN[currentVideoIndex];
        } else {
            media_name.textContent = names[currentVideoIndex];
        }
    }

    function GetTypes(){
        if (tv_shows.includes(media_name.textContent)) {
            media_type.textContent = "Թելեվիզիոն շոու";
        }

        else if (films.includes(media_name.textContent)) {
            media_type.textContent = "Ֆիլմ";
        }

        else if(filmsEN.includes(media_name.textContent)){
            media_type.textContent = "Film";
        }

        else if(tv_shows_EN.includes(media_name.textContent)){
            media_type.textContent = "TV Show";
        }

        else{
            media_type.textContent = "TBH";
        }
    }

    function GetBlurEffect(arr, count) {
        for (let i = 0; i < arr.length; i++) {
            if (i !== count) {
                arr[i].style.filter = "opacity(50%) blur(2px)";
                arr[i].style.pointerEvents = 'none';
            } else {
                arr[i].style.filter = "none";
                arr[i].style.pointerEvents = 'auto';
            }
        }

    }
    
    function GetIndicator(arr, count){
        arr[count].style.width = "16px";
        arr[count].style.backgroundColor = "#0088FA";
        arr[count].style.filter = "opacity(100%)";
        if (count !=0 && count != arr.length-1) {
            arr[count-1].style.width = "8px";
            arr[count-1].style.backgroundColor = "#D9D9D9";
            arr[count-1].style.filter = "opacity(40%)";
            arr[count+1].style.width = "8px";
            arr[count+1].style.backgroundColor = "#D9D9D9";
            arr[count+1].style.filter = "opacity(40%)";
        }

        if(count == 0){
            arr[arr.length-1].style.width = "8px";
            arr[arr.length-1].style.backgroundColor = "#D9D9D9";
            arr[arr.length-1].style.filter = "opacity(40%)";
            arr[count+1].style.width = "8px";
            arr[count+1].style.backgroundColor = "#D9D9D9";
            arr[count+1].style.filter = "opacity(40%)";
        }

        if (count == arr.length-1) {
            arr[count-1].style.width = "8px";
            arr[count-1].style.backgroundColor = "#D9D9D9";
            arr[count-1].style.filter = "opacity(40%)";
        }
        
    }
    
    function updateArrowFilters(poster_index) {
        if (poster_index == 0) {
            projects_left_arrow.style.filter = "opacity(0%)";
            projects_left_arrow.style.pointerEvents = 'none';
            projects_right_arrow.style.filter = "opacity(100%)";
            projects_right_arrow.style.pointerEvents = 'auto';

        } else if (poster_index == document.querySelectorAll('.projects_poster').length - 1) {
            projects_left_arrow.style.filter = "opacity(100%)";
            projects_left_arrow.style.pointerEvents = 'auto';
            projects_right_arrow.style.filter = "opacity(0%)";
            projects_right_arrow.style.pointerEvents = 'none';
        } else {
            projects_left_arrow.style.pointerEvents = 'auto';
            projects_left_arrow.style.filter = "opacity(100%)";
            projects_right_arrow.style.pointerEvents = 'auto';
            projects_right_arrow.style.filter = "opacity(100%)";

        }
    }
    
    
    function GetDates(){
        media_date.textContent = dates[currentVideoIndex];
    }

    GetNames();
    GetTypes();
    GetDates();

    function playPrevVideo(){
        currentVideoIndex = (currentVideoIndex - 1) % videoSources.length;
        video.src = videoSources[currentVideoIndex];
        video.load();
        video.play();
    }
    

    function playNextVideo() {
        currentVideoIndex = (currentVideoIndex + 1) % videoSources.length;
        video.src = videoSources[currentVideoIndex];
        video.load();
        video.play();
    }

    

    if (activeLanguage == 'Armenian') {
        translateToArmenian();
    }

    else{
        translateToEnglish();
    }
    /*
    
    function startInterval(){
        projects_interval = setInterval(function(){
            poster_index = (poster_index + 1) % project_posters.length;
            GetBlurEffect(project_posters, poster_index);
            GetIndicator(project_indicators, poster_index);
            updateArrowFilters(poster_index);
            console.log(poster_index);
            if (poster_index == 0) {
                project_posters_container.scrollLeft = 0;
                console.log(project_posters_container.scrollLeft);
            }
            else{
                project_posters_container.scrollLeft += project_posters[0].clientWidth + 102;
            }
        }, 20000);
    }

    function resetInterval(){
        clearInterval(projects_interval);
        startInterval();
    }

    */

    armenian_button.addEventListener('click', translateToArmenian);
    english_button.addEventListener('click', translateToEnglish);

    function getCurrentIndex_Mobile() {
        const containerRect = project_posters_container.getBoundingClientRect();
        const posters = document.querySelectorAll('.projects_poster');
    
        for (let i = 0; i < posters.length; i++) {
            const posterRect = posters[i].getBoundingClientRect();
            if (
                posterRect.left >= containerRect.left &&
                posterRect.right <= containerRect.right
            ) {
                return i;
            }
        }
    
        // If no poster is within the visible portion, return -1 or any default value
        return -1;
    }

    GetIndicatorContent(project_posters_arr);
    GetUnfinishedPosterContent(unfinished_posters_arr);

    // Update indicators based on the current scroll position
    function updateIndicators_Mobile() {
        const currentIndex = getCurrentIndex_Mobile();
        const indicators_ = document.querySelectorAll('.indicator');
    
        // Reset styles for all indicators
        indicators_.forEach(indicator => {
            indicator.style.width = "8px";
            indicator.style.backgroundColor = "#D9D9D9";
            indicator.style.filter = "opacity(40%)";
        });
    
        // Apply styles for the current indicator and its adjacent indicators
        GetIndicator(indicators_, currentIndex);
    }

    const video = document.getElementById('home_video');
        const progressbar = document.getElementById('zulali_progressbar');

        video.addEventListener('ended', function() {
            playNextVideo();
            GetNames();
            GetTypes();
            GetDates();
            updateVideoBtns();
        });
    
        video.addEventListener('loadedmetadata', function() {
            video_duration = video.duration;
        });
    
        video.addEventListener('timeupdate', function() {
            var current_time = Math.ceil(video.currentTime);
            var progress = Math.ceil((current_time / video_duration) * 100);
            progressbar.style.width = progress + "%";
        });

        function updateVideoBtns(){
            if (currentVideoIndex < 1) {
                video_prev_btn.style.opacity = "50%";
                video_prev_btn.style.cursor = 'auto';
                video_prev_btn.style.pointerEvents = 'none';
            }

            else{
                video_prev_btn.style.opacity = "100%";
                video_prev_btn.style.cursor = 'pointer';
                video_prev_btn.style.pointerEvents = 'auto';
            }
        }

        updateVideoBtns();

        video_next_btn.addEventListener('click', function(){
            playNextVideo();
            GetNames();
            GetTypes();
            GetDates();
            updateVideoBtns();
        })

        video_prev_btn.addEventListener('click', function(){
            playPrevVideo();
            GetNames();
            GetTypes();
            GetDates();
            updateVideoBtns();
        })

        audio_btn.addEventListener('click', function(){
            let audio_btn_bg = [
                "Icons/unmute.png",
                "Icons/mute.png"
            ]

            video.muted = !video.muted;
            mute_click_count++;

            if (mute_click_count % 2) {
                audio_btn.style.backgroundImage = "url(" + audio_btn_bg[0] + ")";
            }

            else{
                audio_btn.style.backgroundImage = "url(" + audio_btn_bg[1] + ")";
            }

        });
        

    if (screenWidth > 656) {
        // Start playing the first video
        video.src = videoSources[currentVideoIndex];
        video.load();
        video.play();
        GetPostersContent(project_posters_films);
        GetPostersContent(project_posters_tv);
        GetPostersContent(project_posters_documentary);
        updateArrowFilters(poster_index);
        GetIndicator(document.querySelectorAll('.indicator'), poster_index);
        GetPartnerLogos();
        GetPartnerNames();

        let filmcheckboxes = Array.from(film_checkboxes);

        filmcheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function(){
                poster_index = 0;
                handleFilmCheckboxes();
                GetIndicator(document.querySelectorAll('.indicator'), poster_index );
                project_posters_container.scrollLeft = 0;
            })
        });
    
        let tvcheckboxes = Array.from(tv_checkbox);
    
        tvcheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function(){
                poster_index = 0;
                handleTVCheckboxes();
                GetIndicator(document.querySelectorAll('.indicator'), poster_index )
                project_posters_container.scrollLeft = 0;
            })
        });
    
        let docscheckboxes = Array.from(anim_checkbox);
    
        docscheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function(){
                poster_index = 0;
                handleDocsCheckboxes();
                GetIndicator(document.querySelectorAll('.indicator'), poster_index )
                project_posters_container.scrollLeft = 0;
            })
        });
    
        function handleTVCheckboxes(){
            let film_checkbox_unchecked = Array.from(film_checkboxes).some(cb => !cb.checked)
            let doc_checkbox_unchecked = Array.from(anim_checkbox).some(cb => !cb.checked)
            let tv_checkbox_unchecked = Array.from(tv_checkbox).some(cb => !cb.checked)
    
            if (tv_checkbox_unchecked) {
                    DelIndicator(project_posters_tv);
                    DelPostersContent(project_posters_tv);  
                }
        
            else if(!tv_checkbox_unchecked){
                project_posters_container.innerHTML = "";
                if (doc_checkbox_unchecked && film_checkbox_unchecked) {
                    indicators.innerHTML = "";
                    GetPostersContent(project_posters_tv);
                    GetIndicatorContent(project_posters_tv);
                }
    
                else if(!film_checkbox_unchecked && doc_checkbox_unchecked){
                    indicators.innerHTML = "";
                    GetPostersContent(project_posters_films);
                    GetPostersContent(project_posters_tv);
                    GetIndicatorContent(project_posters_films);
                    GetIndicatorContent(project_posters_tv);
                }
                else if(film_checkbox_unchecked && !doc_checkbox_unchecked){
                    indicators.innerHTML = "";
                    GetPostersContent(project_posters_tv);
                    GetPostersContent(project_posters_documentary);
                    GetIndicatorContent(project_posters_tv);
                    GetIndicatorContent(project_posters_documentary);
                }
                else if(!doc_checkbox_unchecked && !film_checkbox_unchecked){
                    indicators.innerHTML = "";
                    GetPostersContent(project_posters_films);
                    GetPostersContent(project_posters_tv);
                    GetPostersContent(project_posters_documentary);
                    GetIndicatorContent(project_posters_arr);
                }
    
            }
        }
        
    
        function handleDocsCheckboxes(){
            let film_checkbox_unchecked = Array.from(film_checkboxes).some(cb => !cb.checked)
            let doc_checkbox_unchecked = Array.from(anim_checkbox).some(cb => !cb.checked)
            let tv_checkbox_unchecked = Array.from(tv_checkbox).some(cb => !cb.checked)
    
        if (doc_checkbox_unchecked) {
            DelIndicator(project_posters_documentary);
            DelPostersContent(project_posters_documentary);  
        }
    
        else if(!doc_checkbox_unchecked){
            project_posters_container.innerHTML = "";
                if (film_checkbox_unchecked && tv_checkbox_unchecked) {
                    indicators.innerHTML = "";
                    GetPostersContent(project_posters_documentary);
                    GetIndicatorContent(project_posters_documentary);
                }
    
                else if(!film_checkbox_unchecked && tv_checkbox_unchecked){
                    indicators.innerHTML = "";
                    GetPostersContent(project_posters_films);
                    GetPostersContent(project_posters_documentary);
                    GetIndicatorContent(project_posters_films);
                    GetIndicatorContent(project_posters_documentary);
                }
                else if(film_checkbox_unchecked && !tv_checkbox_unchecked){
                    indicators.innerHTML = "";
                    GetPostersContent(project_posters_tv);
                    GetPostersContent(project_posters_documentary);
                    GetIndicatorContent(project_posters_tv);
                    GetIndicatorContent(project_posters_documentary);
                }
                else if(!doc_checkbox_unchecked && !tv_checkbox_unchecked){
                    indicators.innerHTML = "";
                    GetPostersContent(project_posters_films);
                    GetPostersContent(project_posters_tv);
                    GetPostersContent(project_posters_documentary);
                    GetIndicatorContent(project_posters_arr);
                }
        }
        }
    
        function handleFilmCheckboxes(){
            let film_checkbox_unchecked = Array.from(film_checkboxes).some(cb => !cb.checked)
            let doc_checkbox_unchecked = Array.from(anim_checkbox).some(cb => !cb.checked)
            let tv_checkbox_unchecked = Array.from(tv_checkbox).some(cb => !cb.checked)
    
            if (film_checkbox_unchecked) {
                DelIndicator(project_posters_films);
                DelPostersContent(project_posters_films);  
            }
    
            else if(!film_checkbox_unchecked){
    
                project_posters_container.innerHTML = "";
                if (doc_checkbox_unchecked && tv_checkbox_unchecked) {
                    indicators.innerHTML = "";
                    GetPostersContent(project_posters_films);
                    GetIndicatorContent(project_posters_films);
                }
    
                else if(!doc_checkbox_unchecked && tv_checkbox_unchecked){
                    indicators.innerHTML = "";
                    GetPostersContent(project_posters_films);
                    GetPostersContent(project_posters_documentary);
                    GetIndicatorContent(project_posters_films);
                    GetIndicatorContent(project_posters_documentary);
                }
                else if(doc_checkbox_unchecked && !tv_checkbox_unchecked){
                    indicators.innerHTML = "";
                    GetPostersContent(project_posters_films);
                    GetPostersContent(project_posters_tv);
                    GetIndicatorContent(project_posters_films);
                    GetIndicatorContent(project_posters_tv);
                }
                else if(!doc_checkbox_unchecked && !tv_checkbox_unchecked){
                    indicators.innerHTML = "";
                    GetPostersContent(project_posters_films);
                    GetPostersContent(project_posters_tv);
                    GetPostersContent(project_posters_documentary);
                    GetIndicatorContent(project_posters_arr);
                }
            }
        }

        projects_right_arrow.addEventListener('click', function(){
            poster_index = (poster_index + 1) % document.querySelectorAll('.projects_poster').length;
            GetIndicator(document.querySelectorAll('.indicator'), poster_index);
            updateArrowFilters(poster_index); 
            project_posters_container.scrollLeft += document.querySelectorAll('.projects_poster')[0].clientWidth + 70;
        });
    
        projects_left_arrow.addEventListener('click', function(){
            poster_index = (poster_index - 1 + document.querySelectorAll('.projects_poster').length) % document.querySelectorAll('.projects_poster').length;
            GetIndicator(document.querySelectorAll('.indicator'), poster_index);
            updateArrowFilters(poster_index);
            console.log(document.querySelectorAll('.projects_poster')[0].clientWidth)
            project_posters_container.scrollLeft -= document.querySelectorAll('.projects_poster')[0].clientWidth + 70;
        });
    }

    else{
        let armenian_button_mb = document.getElementById('armenian_btn_mb')
        let english_button_mb = document.getElementById('english_btn_mb')

        let menu_btn_count = 1;
        
        let nav_btns = document.getElementsByClassName('nav_anchor');

        let nav_btns_arr = Array.from(nav_btns);

        nav_btns_arr.forEach(nav_btn => {
            nav_btn.addEventListener('click', function(){
                document.querySelectorAll(".header")[0].classList.remove('is_active');
                document.getElementById('index').style.overflow = 'visible';
                menu_btn_count++;
            })

            
        })

        video.src = videoSources[currentVideoIndex];
        video.load();
        video.play();
        GetPostersContent(project_posters_films);
        GetPostersContent(project_posters_tv);
        GetPostersContent(project_posters_documentary);
        project_posters_container.addEventListener('scroll', updateIndicators_Mobile);
        updateIndicators_Mobile();
        GetPartnerLogos();
        GetPartnerNames();

        let filmcheckboxes = Array.from(film_checkboxes);

        filmcheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function(){
                handleFilmCheckboxes();
                updateIndicators_Mobile()
                project_posters_container.scrollLeft = 0;
            })
        });
    
        let tvcheckboxes = Array.from(tv_checkbox);
    
        tvcheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function(){
                handleTVCheckboxes();
                updateIndicators_Mobile()
                project_posters_container.scrollLeft = 0;
            })
        });
    
        let docscheckboxes = Array.from(anim_checkbox);
    
        docscheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function(){
                handleDocsCheckboxes();
                updateIndicators_Mobile()
                project_posters_container.scrollLeft = 0;
            })
        });
    
        function handleTVCheckboxes(){
            let film_checkbox_unchecked = Array.from(film_checkboxes).some(cb => !cb.checked)
            let doc_checkbox_unchecked = Array.from(anim_checkbox).some(cb => !cb.checked)
            let tv_checkbox_unchecked = Array.from(tv_checkbox).some(cb => !cb.checked)
    
            if (tv_checkbox_unchecked) {
                    DelIndicator(project_posters_tv);
                    DelPostersContent(project_posters_tv);  
                }
        
            else if(!tv_checkbox_unchecked){
                project_posters_container.innerHTML = "";
                if (doc_checkbox_unchecked && film_checkbox_unchecked) {
                    indicators.innerHTML = "";
                    GetPostersContent(project_posters_tv);
                    GetIndicatorContent(project_posters_tv);
                }
    
                else if(!film_checkbox_unchecked && doc_checkbox_unchecked){
                    indicators.innerHTML = "";
                    GetPostersContent(project_posters_films);
                    GetPostersContent(project_posters_tv);
                    GetIndicatorContent(project_posters_films);
                    GetIndicatorContent(project_posters_tv);
                }
                else if(film_checkbox_unchecked && !doc_checkbox_unchecked){
                    indicators.innerHTML = "";
                    GetPostersContent(project_posters_tv);
                    GetPostersContent(project_posters_documentary);
                    GetIndicatorContent(project_posters_tv);
                    GetIndicatorContent(project_posters_documentary);
                }
                else if(!doc_checkbox_unchecked && !film_checkbox_unchecked){
                    indicators.innerHTML = "";
                    GetPostersContent(project_posters_films);
                    GetPostersContent(project_posters_tv);
                    GetPostersContent(project_posters_documentary);
                    GetIndicatorContent(project_posters_arr);
                }
    
            }
        }
        
    
        function handleDocsCheckboxes(){
            let film_checkbox_unchecked = Array.from(film_checkboxes).some(cb => !cb.checked)
            let doc_checkbox_unchecked = Array.from(anim_checkbox).some(cb => !cb.checked)
            let tv_checkbox_unchecked = Array.from(tv_checkbox).some(cb => !cb.checked)
    
        if (doc_checkbox_unchecked) {
            DelIndicator(project_posters_documentary);
            DelPostersContent(project_posters_documentary);  
            GetBlurEffect()
        }
    
        else if(!doc_checkbox_unchecked){
            project_posters_container.innerHTML = "";
                if (film_checkbox_unchecked && tv_checkbox_unchecked) {
                    indicators.innerHTML = "";
                    GetPostersContent(project_posters_documentary);
                    GetIndicatorContent(project_posters_documentary);
                }
    
                else if(!film_checkbox_unchecked && tv_checkbox_unchecked){
                    indicators.innerHTML = "";
                    GetPostersContent(project_posters_films);
                    GetPostersContent(project_posters_documentary);
                    GetIndicatorContent(project_posters_films);
                    GetIndicatorContent(project_posters_documentary);
                }
                else if(film_checkbox_unchecked && !tv_checkbox_unchecked){
                    indicators.innerHTML = "";
                    GetPostersContent(project_posters_tv);
                    GetPostersContent(project_posters_documentary);
                    GetIndicatorContent(project_posters_tv);
                    GetIndicatorContent(project_posters_documentary);
                }
                else if(!doc_checkbox_unchecked && !tv_checkbox_unchecked){
                    indicators.innerHTML = "";
                    GetPostersContent(project_posters_films);
                    GetPostersContent(project_posters_tv);
                    GetPostersContent(project_posters_documentary);
                    GetIndicatorContent(project_posters_arr);
                }
        }
        }
    
        function handleFilmCheckboxes(){
            let film_checkbox_unchecked = Array.from(film_checkboxes).some(cb => !cb.checked)
            let doc_checkbox_unchecked = Array.from(anim_checkbox).some(cb => !cb.checked)
            let tv_checkbox_unchecked = Array.from(tv_checkbox).some(cb => !cb.checked)
    
            if (film_checkbox_unchecked) {
                DelIndicator(project_posters_films);
                DelPostersContent(project_posters_films);  
            }
    
            else if(!film_checkbox_unchecked){
    
                project_posters_container.innerHTML = "";
                if (doc_checkbox_unchecked && tv_checkbox_unchecked) {
                    indicators.innerHTML = "";
                    GetPostersContent(project_posters_films);
                    GetIndicatorContent(project_posters_films);
                }
    
                else if(!doc_checkbox_unchecked && tv_checkbox_unchecked){
                    indicators.innerHTML = "";
                    GetPostersContent(project_posters_films);
                    GetPostersContent(project_posters_documentary);
                    GetIndicatorContent(project_posters_films);
                    GetIndicatorContent(project_posters_documentary);
                }
                else if(doc_checkbox_unchecked && !tv_checkbox_unchecked){
                    indicators.innerHTML = "";
                    GetPostersContent(project_posters_films);
                    GetPostersContent(project_posters_tv);
                    GetIndicatorContent(project_posters_films);
                    GetIndicatorContent(project_posters_tv);
                }
                else if(!doc_checkbox_unchecked && !tv_checkbox_unchecked){
                    indicators.innerHTML = "";
                    GetPostersContent(project_posters_films);
                    GetPostersContent(project_posters_tv);
                    GetPostersContent(project_posters_documentary);
                    GetIndicatorContent(project_posters_arr);
                }
            }
        }

        menu_btn.addEventListener('click', function(){

            menu_btn_count++;

            if ((menu_btn_count % 2 == 0)) {
                document.querySelectorAll(".header")[0].classList.add('is_active');
                document.getElementById('index').style.overflow = 'hidden';
            }

            else {
                document.querySelectorAll(".header")[0].classList.remove('is_active');
                document.getElementById('index').style.overflow = 'visible';
            }

            console.log(menu_btn_count)
            
        })

            armenian_button_mb.addEventListener('click', function(){
                translateToArmenian();
                armenian_button_mb.style.color = '#6d6d6d';
                english_button_mb.style.color = '#fff';
            })
        
            english_button_mb.addEventListener('click', function(){
                translateToEnglish();
                english_button_mb.style.color = '#6d6d6d';
                armenian_button_mb.style.color = '#fff';
            })
        if (activeLanguage == "Armenian") {
            armenian_button_mb.style.color = '#6d6d6d';
        }

        else{
            english_button_mb.style.color = '#6d6d6d';
        }
    }

    document.querySelectorAll('.projects_poster').forEach(poster => {
        poster.addEventListener('click', function(event) {
            clickedPoster = window.getComputedStyle(event.target).getPropertyValue('background-image');
            localStorage.setItem('ClickedPoster', clickedPoster);
        })
    });

    document.querySelectorAll('.projects_poster_unfinished').forEach(poster => {
        poster.addEventListener('click', function(event) {
            clickedPoster = window.getComputedStyle(event.target).getPropertyValue('background-image');
            localStorage.setItem('ClickedPoster', clickedPoster);
        })
    });
});