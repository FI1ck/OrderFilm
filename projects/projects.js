document.addEventListener("DOMContentLoaded", function() {
    let activeLanguage = localStorage.getItem('activeLanguage');
    let ClickedPoster = localStorage.getItem('ClickedPoster');
    const screenWidth = window.innerWidth;
    var menu_btn = document.getElementById('header_menu_btn_js');
    let armenian_button_mb = document.getElementById('armenian_btn_mb')
    let english_button_mb = document.getElementById('english_btn_mb')
    var armenian_button = document.getElementById('armenian_lang');
    var english_button = document.getElementById('english_lang');
    var english_text = document.getElementsByClassName('english')
    var armenian_text = document.getElementsByClassName('armenian');
    var project_bg = document.getElementById('project_page_bg');
    var project_name = document.getElementById('project_name');
    var project_format = document.getElementById('project_format');
    var project_length = document.getElementById('project_length');
    var project_ganre = document.getElementById('project_ganre');
    var project_plot = document.getElementById('project_plot');
    var project_lang = document.getElementById('project_lang');
    var project_country = document.getElementById('project_country')
    var project_subs = document.getElementById('project_subs');
    var project_director = document.getElementById('project_director')
    var project_screenplay = document.getElementById('project_screenplay')
    var project_dop = document.getElementById('project_dop')
    var project_producer = document.getElementById('project_producer')
    var trailer = document.getElementById('trailer');

    var imagePath = ClickedPoster.substring(ClickedPoster.indexOf("Images/"), ClickedPoster.length - 2);
    console.log(imagePath);

    console.log(ClickedPoster);
    
    
    
    var project_info= {
        background: "",
        name: "",
        format: "",
        length: "",
        ganre: "",
        plot: "",
        lang: "",
        country:"",
        subs: "",
        director: "",
        screenplay: "",
        dop: "",
        producer: "",
        yt_src:"",
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
            english_text[j].style.display = 'flex';
            english_button.style.backgroundColor = '#fff';
            english_button.style.color = '#000';
        }

        handleProjectInfo();
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
            armenian_text[j].style.display = 'flex';
            armenian_button.style.backgroundColor = '#fff';
            armenian_button.style.color = '#000';
        }

        handleProjectInfo();
    }

    function SetInfo(){
        project_bg.style.backgroundImage = project_info.background;
        project_name.textContent = project_info.name;
        project_format.textContent = project_info.format;
        project_length.textContent = project_info.length;
        project_ganre.textContent = project_info.ganre;
        project_plot.textContent = project_info.plot;
        project_lang.textContent = project_info.lang;
        project_country.textContent = project_info.country;
        project_subs.textContent = project_info.subs;
        project_director.textContent = project_info.director
        project_screenplay.textContent = project_info.screenplay
        project_dop.textContent = project_info.dop
        project_producer.textContent = project_info.producer
    }

    function handleProjectInfo(){
        if (activeLanguage == 'English') {
            if (imagePath == "Images/david.jpg") {
                project_info = {
                    background: `url(../Images/project_bg/david.png)`,
                    name: "David's Garden",
                    format: "Full HD",
                    length: "49m",
                    ganre: "Feature",
                    plot: `The "David’s Garden" is a 49-minute documentary film about the sufferings of a father who lost his young son in the war and his journey to fulfill son's unfinished dreams.`,
                    lang: "Armenian",
                    country:"Armenia",
                    subs: "English, Armenian",
                    director: "Garush Ghazaryan",
                    screenplay: "Alina Ordyan, Sara Nalbandyan",
                    dop: "Vahe Terteryan, Frunzik Zakaryan, Edgar Harutyunyan",
                    producer: "Hayk Ordyan",             
                }

                SetInfo();
                trailer.innerHTML = '<iframe id="yt_video" src="https://www.youtube.com/embed/gfourOjLz-4" title="David&#39;s Garden (Trailer)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
            }
            else if (imagePath == "Images/zulali.jpg") {
                project_info = {
                    background: `url(../Images/project_bg/zulali.jpg)`,
                    name: "Zulali",
                    format: "2K",
                    length: "92m",
                    ganre: "Drama",
                    plot: `The story revolves around a small village located in a picturesque gorge. The villagers are involved in trade of all kinds at a market near the road. When possible, they cultivate the land. A family of three lives in a run-down house, ignoring the time that passes: the elderly housewife Mamida, a boy named Nazaros and his mother Zulali who has lost her mind. The film is composed of three parts in each of which the narration is done by one of the characters. Three different views on the ups and downs of life in the same time span are put together in a complex mosaic of tragic fate. The film is a drama, but it also incorporates comedy elements, thus exposing the entire spectrum of human feelings and relations.`,
                    lang: "Armenian",
                    country:"Armenia",
                    subs: "English, Russian, French, Spanish, Italian",
                    director: "Hayk Ordyan",
                    screenplay: "Astghik Simonyan",
                    dop: "Arman Ordyan",
                    producer: "Hayk Ordyan",             
                }

                SetInfo();
                trailer.innerHTML = '<iframe id="yt_video" src="https://www.youtube.com/embed/rVWNp0o_w6Q" title="Zulali-Official Trailer (2021)| Order Film Production | (ENG-SUB) (HD)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
            }
            else if (imagePath == "Images/dragonfly.jpg") {
                project_info = {
                    background: `url(../${imagePath})`,
                    name: "Dragonfly",
                    format: "Full HD",
                    length: "7m",
                    ganre: "Documentary",
                    plot: `"Dragonfly" is a poetic allegory about the struggle between light and darkness, about overcoming death and the rebirth of life.`,
                    lang: "-",
                    country:"Russia",
                    subs: "-",
                    director: "Arman Ayvazyan, Narek Khachaturyan",
                    screenplay: "Arman Ayvazyan, Narek Khachaturyan",
                    dop: "Arman Ayvazyan",
                    producer: "Hayk Ordyan",             
                }

                SetInfo();
                trailer.innerHTML = '<iframe id="yt_video" src="https://www.youtube.com/embed/9uRF-knCikM" title="Dragonfly" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
            }
            else if (imagePath == "Images/Robert.png") {
                project_info = {
                    background: `url(../Images/project_bg/robert.jpg)`,
                    name: "Robert Amirkhanyan: My Heart",
                    format: "Full HD",
                    length: "52m",
                    ganre: "Documentary",
                    plot: `The film-portrait about Robert Amirkhanyan is based on Amirkhanyan’s monologue, it presents the maestro’s thoughts on creative, musical, personal and public issues. It consists of an in-frame monologue, live clips, contacts with relatives, colleagues and other people, archive videos and photos. Separate interviews with other professionals, friends and relatives are missing from the film. This gap is filled by live contacts, dialogues and “following scenes”. Maestro introduces himself in different environments, in each of them he talks about his memories, thinks on cultural issues. There are many archival videos in the film, some of which were left in the shadows for some reason, for many people they will be pleasant discoveries.`,
                    lang: "Armenian",
                    country:"Armenia",
                    subs: "English, Russian",
                    director: "Hayk Mkrtchyan",
                    screenplay: "Pavel Selin",
                    dop: "Edgar Harutyunyan",
                    producer: "Hayk Ordyan",             
                }

                SetInfo();
                trailer.innerHTML = '<iframe id = "yt_video" src="https://www.youtube.com/embed/aHu5fMymz6I" title="«Սիրտն իմ. Ռոբերտ Ամիրխանյան» ֆիլմի թիզերը" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
            }
            else if (imagePath == "Images/ohan.jpg") {
                project_info = {
                    background: `url(../${imagePath})`,
                    name: "Ohan Duryan",
                    format: "Full HD",
                    length: "52m",
                    ganre: "Documentary",
                    plot: `A documentary about Armenian conductor "Ohan Duryan"`,
                    lang: "Armenian",
                    country:"Armenia, France, Germany, Russia",
                    subs: "English, Armenian",
                    director: "Hayk Ordyan",
                    screenplay: "Hayk Ordyan, Alina Ordyan",
                    dop: "Frunzik Zaqaryan",
                    producer: "Hayk Ordyan",             
                }

                SetInfo();
            }
            else if (imagePath == "Images/mansuryan.png") {
                project_info = {
                    background: `url(../Images/project_bg/mansuryan.jpg)`,
                    name: "Maestro Mansuryan",
                    format: "Full HD",
                    length: "52m",
                    ganre: "Documentary",
                    plot: `The documentary “Maestro Mansurian” tells about the known and unknown episodes of composer Tigran Mansurian. Maestro’s activities outside Armenia remain undiscovered up to now. The film gives many answers, many of the prominent European and American music figures talk about it. It's dedicated to the 80th birthday of the composer.`,
                    lang: "Armenian",
                    country:"Armenia",
                    subs: "English",
                    director: "Hayk Mkrtchyan",
                    screenplay: "Alina Ordyan",
                    dop: "Arman Ordyan, Hovhannes Grigoryan, Vardges Manukyan",
                    producer: "Hayk Ordyan",             
                }

                SetInfo();
            }
            else if (imagePath == "Images/Gurgen.png") {
                project_info = {
                    background: `url(../Images/project_bg/gurgen.jpg)`,
                    name: "Gurgen Musheghyan: The Harmony of Space",
                    format: "Full HD",
                    length: "52m",
                    ganre: "Documentary",
                    plot: `The documentary is dedicated to life and work of Gurgen Musheghyan, who was a laureate of the USSR State Prize, Honored Architect of the Republic of Armenia, ACA Academician The film introduces the famous architect from different points of view, revealing his professional-human features, the projects he has implemented on a local-urban scale, his thoughts on the architect’s mission, human-city harmony. The image of the architect-intellectual is completed in the combination of these works and thoughts. The film is a portrait with its composition, consisting of interviews, live episodes, directorial-theatrical shootings, archive materials, graphic images.`,
                    lang: "Armenian",
                    country:"Armenia",
                    subs: "English, Russian",
                    director: "Hayk Mkrtchyan",
                    screenplay: "Sara Nalbandyan",
                    dop: "Edgar Harutyunyan",
                    producer: "Hayk Ordyan",             
                }

                SetInfo();
                trailer.innerHTML = '<iframe id = "yt_video" src="https://www.youtube.com/embed/fyj-eR2J-rM" title="Գուրգեն Մուշեղյան.Տարածության հարմոնիա- թրեյլեր" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
            }
            else if (imagePath == "Images/song_and_i.png") {
                project_info = {
                    background: `url(../${imagePath})`,
                    name: "The Song and I",
                    format: "Full HD",
                    length: "52m",
                    ganre: "Feature",
                    plot: `To choose the mundane or the extraordinary, what is easy versus what is right, this is Andranik Mnukyan’s lifelong conflict of the soul to reach balance and purpose in life as he comes to make the heart-wrenching choice between his two passions: faith and music, leading to the understanding that with a touch of love, anything is bearable.`,
                    lang: "Armenian",
                    country:"-",
                    subs: "English, Russian, French, Spanish",
                    director: "Marina Arzumanova",
                    screenplay: "Hovsep Gharibyan",
                    dop: "Vahe Terteryan",
                    producer: "Hayk Ordyan",             
                }

                SetInfo();
            }
            else if (imagePath == "Images/kurwa1.jpg") {
                project_info = {
                    background: `url(../Images/project_bg/kurva1.jpg)`,
                    name: "INSTIGATE ROBOTIC’S COMMERCIAL VIDEOS",
                    format: "Full HD",
                    length: "52m",
                    ganre: "Feature",
                    plot: `Our company together with “Instigate Robotics” has shot commercials for "Human Voice Beamforming System" and "Gunshot Detection System" devices. They are intended for an international audience.`,
                    lang: "English",
                    country:"Armenia",
                    subs: "-",
                    director: "Garush Ghazaryan",
                    screenplay: "Sara Nalbandyan",
                    dop: "Vahe Terteryan",
                    producer: "Hayk Ordyan",             
                }

                SetInfo();
                trailer.innerHTML = '<iframe id = "yt_video" src="https://www.youtube.com/embed/WDzWk9EdzpU" title="Gunshot Detection System" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
            }
            else if (imagePath == "Images/olimp.png") {
                project_info = {
                    background: `url(../${imagePath})`,
                    name: "2023 Europian Weightlifting Championships",
                    format: "Full HD",
                    length: "52m",
                    ganre: "Feature",
                    plot: `2023 թվականի ծանրամարտի Եվրոպայի առաջնություն`,
                    lang: "Armenian",
                    country:"Armenia",
                    subs: "-",
                    director: "Arman Ayvazyan",
                    screenplay: "",
                    dop: "Frunzik Zaqaryan",
                    producer: "Hayk Ordyan",             
                }

                SetInfo();
            }
            else if (imagePath == "Images/martakanon.jpg") {
                project_info = {
                    background: `url(../${imagePath})`,
                    name: "Martakanon",
                    format: "Full HD",
                    length: "52m",
                    ganre: "Feature",
                    plot: `MartakanON is a cooperation between Order film production, Real School and VOMA. The intention behind the project is to make military education public and get people ready to extreme situations.`,
                    lang: "Armenian",
                    country:"Armenia",
                    subs: "-",
                    director: "Arman Ayvazyan",
                    screenplay: "Ani Ordyan",
                    dop: "Edgar Harutyunyan, Frunzik Zaqaryan",
                    producer: "Hayk Ordyan",             
                }

                SetInfo();
                trailer.innerHTML = '<iframe id = "yt_video" src="https://www.youtube.com/embed/ljz1Bjp2YKg" title="#ՄարտականON #1 Կրակային պատրաստություն" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
            }
            else if (imagePath == "Images/tatul.png") {
                project_info = {
                    background: `url(../${imagePath})`,
                    name: "Tatul Krpeyan: The Teacher With the Beard",
                    format: "Full HD",
                    length: "52m",
                    ganre: "Documentary",
                    plot: `“The bearded teacher. Tatul Krpeyan “documentary is dedicated to the 55th anniversary of national hero Tatul Krpeyan. This is a film that comprehensively tells about Tatul’s heroic life, his role in the defense of Martunashen-Getashen for the heroic death of the homeland, with complementary episodes and archival material. In the film, Tatul’s relatives, comrades-in-arms and friends from Maratuk tell about his childhood and adolescence, enlistment in the defense of the homeland, his journey, as well as his willpower and heroism, revealing new and interesting episodes. Filming took place both in Armenia and Artsakh. The film has an academic structure, where the narrative and analytical narration is preserved through interviews, live episodes, author’s text and archive materials.`,
                    lang: "Armenian",
                    country:"Armenia",
                    subs: "-",
                    director: "Garush Ghazaryan",
                    screenplay: "Alina Ordyan",
                    dop: "Edgar Harutyunyan",
                    producer: "Hayk Ordyan",             
                }

                SetInfo();
                trailer.innerHTML = '<iframe id = "yt_video" src="https://www.youtube.com/embed/7TwZfNbVFg8" title="Փ/Ֆ «Մորուքով ուսուցիչը.  Թաթուլ Կրպեյան» անոնս" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
            }
            else if (imagePath == "Images/xoren.png") {
                project_info = {
                    background: `url(../${imagePath})`,
                    name: "KHOREN ABRAHAMYAN: TIMELESS RETURN",
                    format: "Full HD",
                    length: "52m",
                    ganre: "Documentary",
                    plot: `“Khoren Abrahamyan : Endless Return” is dedicated to the 90th anniversary of the birth of USSR National Artist Khoren Abrahamyan. The film fully reflects on the theatrical-cinematic activity of the great actor, the artistic and directing path, presenting interesting biographical episodes. Through live interviews, the character of Abraham’s artist is presented in a more complete way. The problems of the last period of his biography and the campaign against him are presented in an investigative version.Among the “heroes” of the film are a wooden chair, a small table and an ashtray, which appear in different places, ensuring the presence of the artist. The rich archival material and professional analysis complete the image of the artist.`,
                    lang: "Armenian",
                    country:"Armenia",
                    subs: "-",
                    director: "Hayk Ordyan",
                    screenplay: "Sosi Khanikyan, Tigran Sirunyan",
                    dop: "Edgar Harutyunyan",
                    producer: "Hayk Ordyan",             
                }

                SetInfo();
                trailer.innerHTML = '<iframe id = "yt_video" src="https://www.youtube.com/embed/9RcCBLFcjLE" title="Փ/Ֆ «Անվերջ վերադարձ. Խորեն Աբրահամյան» անոնս" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
            }
            else if (imagePath == "Images/frunz.png") {
                project_info = {
                    background: `url(../${imagePath})`,
                    name: "FRUNZIK MKRTCHYAN։ WITH SERIOUS SMILE",
                    format: "Full HD",
                    length: "52m",
                    ganre: "Documentary",
                    plot: `The documentary “Frunzik Mkrtchyan: With a Serious Smile” is dedicated to the 90th anniversary of the birth of the talented and beloved actor, National Artist of the USSR Frunzik Mkrtchyan. It comprehensively presents his life and creative activity, which are expressed in fused, complementary episodes in the film.In the film, Fruzik’s colleagues, acquaintances, relatives and friends tell how his first stage took place, his journey in theater and cinema, and present interesting episodes from life. The film has an academic structure, where the narrative and analytical narration is preserved through interviews, live episodes, author’s text and archive materials.`,
                    lang: "Armenian",
                    country:"Armenia",
                    subs: "-",
                    director: "Astghik Ghazaryan",
                    screenplay: "Alina Ordyan",
                    dop: "Edgar Harutyunyan",
                    producer: "Hayk Ordyan",             
                }

                SetInfo();
                trailer.innerHTML = '<iframe id = "yt_video" src="https://www.youtube.com/embed/lW33CnLawIo" title="Փ/Ֆ «Ֆրունզիկ Մկրտչյան․ Լուրջ ժպիտով» անոնս" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
            }
            else if (imagePath == "Images/kalencner.png") {
                project_info = {
                    background: `url(../${imagePath})`,
                    name: "Galentz",
                    format: "Full HD",
                    length: "52m",
                    ganre: "Documentary",
                    plot: `The documentary “Galents” is dedicated to the 110 and 100th anniversaries of the Honored Artists of the Armenian ASSR Harutyun and Armine Galents. It comprehensively presents the life and creative activity of a talented couple, which is expressed in the film in fused, complementary episodes from life. There are also revelations in the film. The shooting took place in Armenia, Lebanon and Germany.The film has an academic structure, where the narrative and analytical narration is preserved through interviews, live episodes, author’s text and archive materials.`,
                    lang: "Armenian",
                    country:"Armenia",
                    subs: "-",
                    director: "Astghik Ghazaryan",
                    screenplay: "Alina Ordyan",
                    dop: "Edgar Harutyunyan",
                    producer: "Hayk Ordyan",             
                }

                SetInfo();
                trailer.innerHTML = '<iframe id = "yt_video" src="https://www.youtube.com/embed/wG-c4fbTMzE" title="Փ/Ֆ «Կալենցներ» անոնս" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
            }
            else if (imagePath == "Images/svetlana.png") {
                project_info = {
                    background: `url(../${imagePath})`,
                    name: "Svetlana Grigoryan։ One-Act Comedy",
                    format: "Full HD",
                    length: "52m",
                    ganre: "Documentary",
                    plot: `Svetlana Grigoryan is one of the most beloved devotees of the Armenian theater. Her characters are still unsurpassed and memorable. However, her personal and creative life did not go smoothly: there were ups and downs. In the documentary portrait, a number of interesting episodes from the life of actress are reflected in the memories of her close ones. Her sister's granddaughter tries to organize a gathering in memory of her beloved auntie, invites her close ones to a memorial-conversation.`,
                    lang: "Armenian",
                    country:"Armenia",
                    subs: "-",
                    director: "Garush Ghazaryan",
                    screenplay: "Tigran Sirunyan",
                    dop: "Edgar Harutyunyan",
                    producer: "Hayk Ordyan",             
                }

                SetInfo();
                trailer.innerHTML = '<iframe id = "yt_video" src="https://www.youtube.com/embed/PxOzFsmEKYQ" title="Svetlana Grigoryan -Documentary" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
            }
            else if (imagePath == "Images/komitas.png") {
                project_info = {
                    background: `url(../${imagePath})`,
                    name: "The Spring Behind the Door ",
                    format: "Full HD",
                    length: "120m",
                    ganre: "Feature",
                    plot: `Armenian priest Komitas, who achieves European fame as a singer and songwriter, concomitantly suffers the disasters of the early 20th century: war and genocide which drive him insane.`,
                    lang: "French, Armenian, Turkish, German",
                    subs: "English, Armenian",
                    country: "Armenia",
                    director: "Hayk Ordyan",
                    screenplay: "Vahram Martirosyan",
                    dop: "Hayk Kirakosyan",
                    producer: "Hayk Ordyan",             
                }

                SetInfo();
            }
    
        }

        else{
                if (imagePath == "Images/david.jpg") {
                    project_info = {
                        background: `url(../Images/project_bg/david.png)`,
                        name: "Դավիթի Այգին",
                        format: "Full HD",
                        length: "49ր",
                        ganre: "Վավերագրական",
                        plot: `«Դավթի այգին» 49 րոպե տևողությամբ վավերագրական ֆիլմ է պատերազմում իր մանկահասակ որդուն կորցրած հոր տառապանքների և որդու անավարտ երազանքների իրականացման ճանապարհորդության մասին։`,
                        lang: "Անգլերեն",
                        country:"Հայաստան",
                        subs: "Անգլերեն, Հայերեն",
                        director: "Գարուշ Ղազարյան",
                        screenplay: "Ալինա Օրդյան, Սառա Նալբանդյան",
                        dop: "Վահե Տերտերյան, Ֆրունզիկ Զաքարյան, Եդգար Հարությունյան",
                        producer: "Հայկ Օրդյան",             
                    }
                
                    SetInfo();
                    trailer.innerHTML = '<iframe id="yt_video" src="https://www.youtube.com/embed/gfourOjLz-4" title="David&#39;s Garden (Trailer)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
                }
                else if (imagePath == "Images/zulali.jpg") {
                    project_info = {
                        background: `url(../Images/project_bg/zulali.jpg)`,
                        name: "Զուլալի",
                        format: "2K",
                        length: "92ր",
                        ganre: "Դրամա",
                        plot: `Հին տանը, չնկատելով ժամանակի ընթացքը, ապրում է մի ընտանիք՝ տարեց տնային տնտեսուհի Աքիրը, տղան՝ Նազարոսը և բանականությունը կորցրած նրա մայրը՝ Զուլալին: Ընտանիքի կյանքի նույն ժամանակահատվածի իրադարձությունների մասին երեք տարբեր հայացք դասավորվում են ողբերգական ճակատագրի մեկ բարդ խճանկարի մեջ՝ միաժամանակ այդ ամբողջ պատմությանը տալով հեքիաթային ինտոնացիա։ Ֆիլմի ժանրը դրամա է, բայց այն նաև պարունակում է կատակերգության տարրեր՝ դրանով իսկ բացահայտելով մարդկային զգացմունքների և հարաբերությունների ողջ դիապազոնը:`,
                        lang: "Հայերեն",
                        country:"Հայաստան",
                        subs: "Անգլերեն, Ռուսերեն, Ֆրանսերեն, Իսպաներեն, Իտալերեն",
                        director: "Հայկ Օրդյան",
                        screenplay: "Աստղիկ Սիմոնյան",
                        dop: "Արման Օրդյան",
                        producer: "Հայկ Օրդյան",             
                    }
    
                    SetInfo();
                    trailer.innerHTML = '<iframe id="yt_video" src="https://www.youtube.com/embed/rVWNp0o_w6Q" title="Zulali-Official Trailer (2021)| Order Film Production | (ENG-SUB) (HD)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
                }
                else if (imagePath == "Images/dragonfly.jpg") {
                    project_info = {
                        background: `url(../${imagePath})`,
                        name: "Դրագոնֆլայ",
                        format: "Full HD",
                        length: "8ր",
                        ganre: "Վավերագրական",
                        plot: `"Դրագոնֆլայ"-ը բանաստեղծական այլաբանություն է լույսի և խավարի պայքարի, մահվան հաղթահարման և կյանքի վերածննդի մասին։`,
                        lang: "-",
                        country:"Ռուսաստան",
                        subs: "-",
                        director: "Արման Այվազյան, Նարեկ Խաչատուրյան",
                        screenplay: "Արման Այվազյան, Նարեկ Խաչատուրյան",
                        dop: "Արման Այվազյան",
                        producer: "Հայկ Օրդյան",             
                    }
    
                    SetInfo();
                    trailer.innerHTML = '<iframe id="yt_video" src="https://www.youtube.com/embed/9uRF-knCikM" title="Dragonfly" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
                }
                else if (imagePath == "Images/Robert.png") {
                    project_info = {
                        background: `url(../Images/project_bg/robert.jpg)`,
                        name: "Սիրտն Իմ",
                        format: "Full HD",
                        length: "52ր",
                        ganre: "Վավերագրական",
                        plot: `Ֆիլմ–դիմանկարը կառուցված է Ամիրխանյանի մենախոսության վրա և ներկայացնում է մաեստրոյի մտորումները ստեղծագործական, երաժշտական, անձնական և հասարակական խնդիրների շուրջ: Այն բաղկացած է կենդանի կտորներից՝ շփումներ հարազատների, գործընկերների և այլ մարդկանց հետ, արխիվային տեսանյութերից և լուսանկարներից: Մաեստրոն ներկայանում է տարբեր միջավայրերում և յուրաքանչյուրում նա խոսում է իր հիշողությունների մասին և խորհում մշակույթի խնդիրների շուրջ:`,
                        lang: "Հայերեն",
                        country:"Հայաստան",
                        subs: "Անգլերեն, Ռուսերեն",
                        director: "Հայկ Մկրտչյան",
                        screenplay: "Պավել Սելին",
                        dop: "Եդգար Հարությունյան",
                        producer: "Հայկ Օրդյան",            
                    }
    
                    SetInfo();
                    trailer.innerHTML = '<iframe id = "yt_video" src="https://www.youtube.com/embed/aHu5fMymz6I" title="«Սիրտն իմ. Ռոբերտ Ամիրխանյան» ֆիլմի թիզերը" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
                }
                else if (imagePath == "Images/ohan.jpg") {
                    project_info = {
                        background: `url(../${imagePath})`,
                        name: "Գեղեցիկ Դադարից Առաջ",
                        format: "Full HD",
                        length: "52ր",
                        ganre: "Վավերագրական",
                        plot: `Վավերագրական ֆիլմ հայ դիրիժոր «Օհան Դուրյանի» մասին.`,
                        lang: "Հայերեն",
                        country:"Հայաստան, Ֆրանսիա, Գեռմանիա, Ռուսաստան",
                        subs: "Անգլերեն, Հայերեն",
                        director: "Հայկ Օրդյան",
                        screenplay: "Հայկ Օրդյան, Ալինա Օրդյան",
                        dop: "Ֆրունզիկ Զաքարյան",
                        producer: "Հայկ Օրդյան",              
                    }
    
                    SetInfo();
                }
                else if (imagePath == "Images/mansuryan.png") {
                    project_info = {
                        background: `url(../Images/project_bg/mansuryan.jpg)`,
                        name: "Մաեստրո Մանսուրյան",
                        format: "Full HD",
                        length: "52ր",
                        ganre: "Վավերագրական",
                        plot: `«Մաեստրո Մանսուրյան» վավերագրական ֆիլմը պատմում է կոմպոզիտոր Տիգրան Մանսուրյանի հայտնի և անհայտ դրվագների մասին։ Մաեստրոյի գործունեությունը Հայաստանից դուրս մինչ օրս մնում է չբացահայտված։ Ֆիլմը տալիս է բազմաթիվ պատասխաններ, դրա մասին խոսում են եվրոպական և ամերիկյան երաժշտության ականավոր գործիչներից շատերը։ Այն նվիրված է կոմպոզիտորի ծննդյան 80-ամյակին։`,
                        lang: "Հայերեն",
                        country:"Հայաստան",
                        subs: "Անգլերեն",
                        director: "Հայկ Մկրտչյան",
                        screenplay: "Ալինա Օրդյան",
                        dop: "Արման Օրդյան, Հովհաննես Գրիգորյան, Վարդգես Մանուկյան",
                        producer: "Հայկ Օրդյան",             
                    }
    
                    SetInfo();
                }
                else if (imagePath == "Images/Gurgen.png") {
                    project_info = {
                        background: `url(../Images/project_bg/gurgen.jpg)`,
                        name: "Գուրգեն Մուշեղյան։ Տարածության Հարմոնիա",
                        format: "Full HD",
                        length: "52ր",
                        ganre: "Վավերագրական",
                        plot: `Գուրգեն Մուշեղյանը խորհրդային պոստմոդերնիզմի ամենայուրօրինակ ներկայացուցիչներից է, որի ճանապարհը հարթ չի եղել։ Ֆիլմն անվանի ճարտարապետին ներկայացնում է մի քանի տեսանկյունից՝ բացահայտելով նրա պրոֆեսիոնալ և մարդկային հատկանիշները, իրականացրած նախագծերը՝ տեղային և քաղաքաշինական մասշտաբով, նաև նրա մտքերը ճարտարապետի առաքելության, մարդ-քաղաք ներդաշնակության մասին. այս գործերի և խոհերի համադրության մեջ ամբողջանում է ճարտարապետ մտավորականի կերպարը:`,
                        lang: "Հայերեն",
                        country:"Հայաստան",
                        subs: "Անգլերեն, Ռուսերեն",
                        director: "Հայկ Մկրտչյան",
                        screenplay: "Սառա Նալբանդյան",
                        dop: "Եդգար Հարությունյան",
                        producer: "Հայկ Օրդյան",              
                    }
    
                    SetInfo();
                    trailer.innerHTML = '<iframe id = "yt_video" src="https://www.youtube.com/embed/fyj-eR2J-rM" title="Գուրգեն Մուշեղյան.Տարածության հարմոնիա- թրեյլեր" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
                }
                else if (imagePath == "Images/song_and_i.png") {
                    project_info = {
                        background: `url(../${imagePath})`,
                        name: "Երգն ու Ես",
                        format: "Full HD",
                        length: "52ր",
                        ganre: "Վավերագրական",
                        plot: `Ընտրել առօրյան կամ արտասովորը, հեշտն ընդդեմ ճիշտի, սա Անդրանիկ Մնուկյանի հոգու ցմահ հակամարտությունն է՝ հասնելու հավասարակշռության և կյանքի նպատակին, երբ նա գալիս է սիրտ կեղտոտող ընտրություն կատարել իր երկու կրքերի՝ հավատքի և երաժշտության միջև: , ինչը հանգեցնում է այն հասկացողության, որ սիրո հպումով ամեն ինչ տանելի է:`,
                        lang: "Հայերեն",
                        country:"-",
                        subs: "Անգլերեն, Ռուսերեն",
                        director: "Մարինա Արզումանովա",
                        screenplay: "Հովսեփ Ղարիբյան",
                        dop: "Վահե Տերտերյան",
                        producer: "Հայկ Օրդյան",             
                    }
    
                    SetInfo();
                }
                else if (imagePath == "Images/kurwa1.jpg") {
                    project_info = {
                        background: `url(../Images/project_bg/kurva1.jpg)`,
                        name: "Ինսթիգեյթ Ռոբոտիքսի նաղագիծ",
                        format: "Full HD",
                        length: "52ր",
                        ganre: "Վավերագրական",
                        plot: `Մեր ընկերությունը «Ինսթիգեյթ Ռոբոտիքս»-ի հետ համատեղ նկարահանել է “Human Voice Beamforming System” և “Gunshot Detection System” սարքերը ներկայացնող գովազդային հոլովակները։ Դրանք նախատեսված են միջազգային լսարանի համար։`,
                        lang: "Անգլերեն",
                        country:"Հայաստան",
                        subs: "-",
                        director: "Գարուշ Ղազարյան",
                        screenplay: "Սառա Նալբանդյան",
                        dop: "Վահե Տերտերյան",
                        producer: "Հայկ Օրդյան",               
                    }
    
                    SetInfo();
                    trailer.innerHTML = '<iframe id = "yt_video" src="https://www.youtube.com/embed/WDzWk9EdzpU" title="Gunshot Detection System" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
                }
                else if (imagePath == "Images/olimp.png") {
                    project_info = {
                        background: `url(../${imagePath})`,
                        name: "2023 Europian Weightlifting Championships",
                        format: "Full HD",
                        length: "52ր",
                        ganre: "Վավերագրական",
                        plot: `2023 Europian Weightlifting Championships`,
                        lang: "Հայերեն",
                        country:"Հայաստան",
                        subs: "-",
                        director: "Արման Այվազյան",
                        screenplay: "",
                        dop: "Ֆրունզիկ Զաքարյան",
                        producer: "Հայկ Օրդյան",             
                    }
    
                    SetInfo();
                }
                else if (imagePath == "Images/martakanon.jpg") {
                    project_info = {
                        background: `url(../${imagePath})`,
                        name: "Մարտականոն",
                        format: "Full HD",
                        length: "52ր",
                        ganre: "Վավերագրական",
                        plot: `ՄարտականON - նախագիծը «Օրդեր ֆիլմ փրոդաքշնի», «Իրական դպրոցի» և «ՈՄԱ» կազմակերպության համատեղ արտադրություն է, որն ուղղված է ռազմական պատրաստությունը հանրայնացնելու և ազգաբնակչությանը ռազմական իրավիճակներին պատրաստելու։`,
                        lang: "Հայերեն",
                        country:"Հայաստան",
                        subs: "Անգլերեն, Ռուսերեն",
                        director: "Արման Այվազյան",
                        screenplay: "Անի Օրդյան",
                        dop: "Եդգար Հարությունյան, Ֆրունզիկ Զաքարյան",
                        producer: "Հայկ Օրդյան",             
                    }
    
                    SetInfo();
                    trailer.innerHTML = '<iframe id = "yt_video" src="https://www.youtube.com/embed/ljz1Bjp2YKg" title="#ՄարտականON #1 Կրակային պատրաստություն" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
                }
                else if (imagePath == "Images/tatul.png") {
                    project_info = {
                        background: `url(../${imagePath})`,
                        name: "Թաթուլ Կրպեյան: Մորուքով ՈՒսուցիչը",
                        format: "Full HD",
                        length: "52ր",
                        ganre: "Վավերագրական",
                        plot: `«Մորուքով ուսուցիչը. Թաթուլ Կրպեյան» փաստագրական ֆիլմը նվիրված է ազգային հերոս Թաթուլ Կրպեյանի 55-ամյա հոբելյանին: Այն Թաթուլի հերոսական կյանքի, Մարտունաշեն-Գետաշենի պաշտպանության ժամանակ նրա ունեցած դերի և հանուն հայրենիքի հերոսաբար զոհվելու մասին համակողմանիորեն պատմող ֆիլմ է՝ միմյանց լրացնող դրվագներով ու արխիվային նյութով: Ֆիլմում Թաթուլի հարազատները, մարտական ու մարաթուկցի ընկերները պատմում են նրա մանկության ու պատանեկության, հայրենիքի պաշտպանությանը զինվորագրվելու, անցած ճանապարհի, ինչպես նաև նրա կամային հատկությունների ու հերոսությունների մասին՝ բացահայտելով նաև նոր ու հետաքրքիր դրվագներ: Նկարահանումներ են կատարվել ինչպես Հայաստանում, այնպես էլ Արցախում: Ֆիլմն ունի ակադեմիական կառուցվածք, որտեղ հարցազրույցների, կենդանի էպիզոդների, հեղինակային տեքստի ու արխիվային նյութերի միջոցով պահպանվում է պատմողական ու վերլուծական շարադրանքը:`,
                        lang: "Հայերեն",
                        country:"Հայաստան",
                        subs: "Անգլերեն, Ռուսերեն",
                        director: "Գարուշ Ղազարյան",
                        screenplay: "Ալինա Օրդյան",
                        dop: "Եդգար Հարությունյան",
                        producer: "Հայկ Օրդյան",             
                    }
    
                    SetInfo();
                    trailer.innerHTML = '<iframe id = "yt_video" src="https://www.youtube.com/embed/7TwZfNbVFg8" title="Փ/Ֆ «Մորուքով ուսուցիչը.  Թաթուլ Կրպեյան» անոնս" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
                }
                else if (imagePath == "Images/xoren.png") {
                    project_info = {
                        background: `url(../${imagePath})`,
                        name: "Խորեն Աբրահամյան: Անվերջ Վերադարձ",
                        format: "Full HD",
                        length: "52ր",
                        ganre: "Վավերագրական",
                        plot: `Ֆիլմը նվիրված է ԽՍՀՄ ժողովրդական արտիստ Խորեն Աբրահամյանի ծննդյան 90-ամյա հոբելյանին: Այն ամբողջությամբ անդրադառնում է մեծ դերասանի թատերական և կինոգործունեությանը, արտիստական և ռեժիսորական ուղղուն՝ ներկայացնելով նաև կենսագրական հետաքրքիր դրվագներ: Հարցազրույցների և կենդանի էպիզոդների միջոցով առավել ամբողջական ներկայացվում է Աբրահամյան մարդու և արտիստի կերպարը: Նրա կենսագրության վերջին շրջանի խնդիրներն ու նրա դեմ ծավալված արշավը ներկայացվում է հետաքննական տարբերակով: Ֆիլմի «հերոսներից» են նաև փայտե աթոռը, փոքրիկ սեղանիկն ու վրայի մոխրամանը, որոնք հայտնվելով տարբեր տեղերում, ապահովում են արտիստի ներկայությունը:`,
                        lang: "Հայերեն",
                        country:"Հայաստան",
                        subs: "Անգլերեն, Ռուսերեն",
                        director: "Հայկ Օրդյան",
                        screenplay: "Սոսի Խանիկյան",
                        dop: "Եդգար Հարությունյան",
                        producer: "Հայկ Օրդյան",             
                    }
    
                    SetInfo();
                    trailer.innerHTML = '<iframe id = "yt_video" src="https://www.youtube.com/embed/9RcCBLFcjLE" title="Փ/Ֆ «Անվերջ վերադարձ. Խորեն Աբրահամյան» անոնս" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
                }
                else if (imagePath == "Images/frunz.png") {
                    project_info = {
                        background: `url(../${imagePath})`,
                        name: "Ֆրունզե Մկրտչյան։ Լուրջ Ժպիտով",
                        format: "Full HD",
                        length: "52m",
                        ganre: "Վավերագրական",
                        plot: `Ֆիլմը նվիրված է տաղանդաշատ և սիրված դերասան, ԽՍՀՄ ժողովրդական արտիստ Ֆրունզիկ Մկրտչյանի ծննդյան 90-ամյա հոբելյանին: Այն համակողմանի ներկայացնում է նրա կյանքն ու ստեծագործական գործունեությունը, որ միաձուլված, միմյանց լրացնող դրվագներով արտահայտվում են ֆիլմում: Ֆիլմում Ֆրուզիկի գործընկերները, ծանոթները, հարազատներն ու հարևանները պատմում են, թե ինչպես է տեղի ունեցել նրա առաջին բեմելը, անցած ճանապարհը թատրոնում և կինոյում, ներկայացնում են հետաքրքիր դրվագներ կյանքից: Ֆիլմն ունի ակադեմիական կառուցվածք, որտեղ հարցազրույցների, կենդանի էպիզոդների, հեղինակային տեքստի ու արխիվային նյութերի միջոցով պահպանվում է պատմողական ու վերլուծական շարադրանքը:`,
                        lang: "Հայերեն",
                        country:"Հայաստան",
                        subs: "Անգլերեն, Ռուսերեն",
                        director: "Աստղիկ Ղազարյան",
                        screenplay: "Ալինա Օրդյան",
                        dop: "Եդգար Հարությունյան",
                        producer: "Հայկ Օրդյան",         
                    }
    
                    SetInfo();
                    trailer.innerHTML = '<iframe id = "yt_video" src="https://www.youtube.com/embed/lW33CnLawIo" title="Փ/Ֆ «Ֆրունզիկ Մկրտչյան․ Լուրջ ժպիտով» անոնս" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
                }
                else if (imagePath == "Images/kalencner.png") {
                    project_info = {
                        background: `url(../${imagePath})`,
                        name: "Կալենցներ",
                        format: "Full HD",
                        length: "52ր",
                        ganre: "Վավերագրական",
                        plot: `Ֆիլմը նվիրված է ՀԽՍՀ վաստակավոր նկարիչներ Հարություն և Արմինե Կալենցների 110 և 100-ամյա հոբելյաններին: Այն համակողմանի ներկայացնում է տաղանդաշատ ամուսինների կյանքն ու ստեծագործական գործունեությունը, որ ֆիլմում արտահայտվում են միաձուլված, միմյանց լրացնող դրվագներով:Ֆիլմում նրանց ընկերները, ծանոթները, հարազատներն ու հարևանները պատմում են նկարչության ասպարեզում առաջին քայլերի, անցած ճանապարհի, հայրենիք վերադարձի մասին և ներկայացնում նրանց ստեղծագործություններն ու հետաքրքիր դրվագներ կյանքից: Ֆիլմում կան նաև բացահայտումներ, իսկ նկարահանումները կատարվել Հայաստանում, Լիբանանում, Գերմանիայում: Ֆիլմն ունի ակադեմիական կառուցվածք, որտեղ հարցազրույցների, կենդանի էպիզոդների, հեղինակային տեքստի ու արխիվային նյութերի միջոցով պահպանվում է պատմողական ու վերլուծական շարադրանքը:`,
                        lang: "Հայերեն",
                        country:"Հայաստան",
                        subs: "Անգլերեն, Ռուսերեն",
                        director: "Աստղիկ Ղազարյան",
                        screenplay: "Ալինա Օրդյան",
                        dop: "Եդգար Հարությունյան",
                        producer: "Հայկ Օրդյան",             
                    }
    
                    SetInfo();
                    trailer.innerHTML = '<iframe id = "yt_video" src="https://www.youtube.com/embed/wG-c4fbTMzE" title="Փ/Ֆ «Կալենցներ» անոնս" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
                }
                else if (imagePath == "Images/svetlana.png") {
                    project_info = {
                        background: `url(../${imagePath})`,
                        name: "Սվետլանա Գրիգորյան։ Կատակերգություն մեկ Գործողությամբ",
                        format: "Full HD",
                        length: "52ր",
                        ganre: "Վավերագրական",
                        plot: `Սվետլանա Գրիգորյանը հանդիսանում է հայ թատրոնի ամենասիրելի նվիրյալներից մեկը, որի կերտած կերպարներն առ այսօր անգերազանցելի են և հիշարժան: Սակայն նրա անձնական և ստեղծագործական կյանքը հարթ չի ընթացել. եղել են և՛ վերելքներ, և՛ վայրէջքներ: Դիմանկար-պատումում կյանքի մի շարք նմանատիպ հետաքրքիր դրվագներ արտացոլվում են նրա մտերիմների հուշերում, իսկ քրոջ թոռնուհին փորձում է հավաքույթ կազմակերպել սիրելի բարեկամուհու հիշատակի առթիվ և հրավիրում է մտերիմներին հուշ-զրույցի:`,
                        lang: "Հայերեն",
                        country:"Հայաստան",
                        subs: "Անգլերեն, Ռուսերեն",
                        director: "Գարուշ Ղազարյան",
                        screenplay: "Տիգրան Սիրունյան",
                        dop: "Եդգար Հարությունյան",
                        producer: "Հայկ Օրդյան",             
                    }
    
                    SetInfo();
                    trailer.innerHTML = '<iframe id = "yt_video" src="https://www.youtube.com/embed/PxOzFsmEKYQ" title="Svetlana Grigoryan -Documentary" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
                }
                else if (imagePath == "Images/komitas.png") {
                    project_info = {
                        background: `url(../${imagePath})`,
                        name: "Գարունը Դռան ետևում",
                        format: "Full HD",
                        length: "120ր",
                        ganre: "Գեղարվեստական",
                        plot: `Հայ քահանա Կոմիտասը, ով եվրոպական հռչակ է ձեռք բերել որպես երգիչ և երգահան, միաժամանակ տառապում է 20-րդ դարասկզբի արհավիրքներից՝ պատերազմից և ցեղասպանությունից, որոնք նրան խելագարության են հասցնում:`,
                        lang: "Ֆրանսերեն, Հայերեն, Թուրքերեն, Գեռմաներեն",
                        country:"Հայաստան",
                        subs: "Անգլերեն, Հայերեն",
                        director: "Հայկ Օրդյան",
                        screenplay: "Վահրամ Մարտիրոսյան",
                        dop: "Հայկ Կիրակոսյան",
                        producer: "Հայկ Օրդյան",             
                    }

                    SetInfo();
                }
            }
    }

    if (activeLanguage == 'Armenian') {
        translateToArmenian();
    }

    else{
        translateToEnglish();
    }

    if (screenWidth > 656) {

        armenian_button.addEventListener('click', translateToArmenian);
        english_button.addEventListener('click', translateToEnglish);

    }

    else{

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
    

});