//readmoreBtn.addEventListener('click', Toggle('read-more));
const hireMeBtn = document.querySelector('.hire-me');
const Rtext = document.querySelector('.right-text');

hireMeBtn.addEventListener('click', (e) =>{
    Rtext.classList.toggle('hire-me');
    if(hireMeBtn.innerText === '採用する'){
        hireMeBtn.innerText = 'ありがとう';
    } else{
        hireMeBtn.innerText = '採用する';
    }
})

//hireMeBtn.addEventListener('click', Toggle('hire-me-now'));
const readmoreBtn = document.querySelector('.read-more');
const Ltext = document.querySelector('.left-text');

readmoreBtn.addEventListener('click', (e) =>{
    Ltext.classList.toggle('read-more');
    if(readmoreBtn.innerText === 'もっと見る'){
        readmoreBtn.innerText = '少し見る';
    } else{
        readmoreBtn.innerText = 'もっと見る';
    }
})

//language change 
        const langEl = document.querySelector('.langWrap');
        const link = document.querySelectorAll('a');

        const homeEl = document.querySelector('.home');
        const aboutEl = document.querySelector('.about');
        const skillEl = document.querySelector('.skill');
        const portfolioEl = document.querySelector('.portfolio');
        const portEl = document.querySelector('.port');
        const resumeEl = document.querySelector('.resume');
        const contactEl = document.querySelector('.contact');
        const introEl = document.querySelector('.intro');
        const heroEl = document.querySelector('.hero');
        const portBtnEl = document.querySelector('.btn-portfolio');
        const resumeBtnEl = document.querySelector('.btn-resume');
        const aboutMeTitleEl = document.querySelector('.aboutMeTitle');
        const textEl = document.querySelector('.text');
        const skillTitleEl = document.querySelector('.skillTitle');
        const languageEl = document.querySelector('.language');
        const verConEl = document.querySelector('.verCon');
        const DBEl = document.querySelector('.DB');
        const portTitleEl = document.querySelector('.portTitle');
        const view1El = document.querySelector('.view1');
        const view2El = document.querySelector('.view2');
        const resumeTitleEl = document.querySelector('.resumeTitle');
        const backgroundEl =document.querySelector('.background')
        const appealEl =document.querySelector('.appeal')
        const lefttextEl = document.querySelector('.left-text');
        const moreTextLEl = document.querySelector('.moreTextL');
        const readmoreEl = document.querySelector('.read-more');
        const righttextEl = document.querySelector('.right-text');
        const moreTextREl = document.querySelector('.moreTextR');
        const hireMeEl = document.querySelector('.hire-me');
        const contactTitleEl = document.querySelector('.contactTitle');
        const contactTEl = document.querySelector('.contactT');
        

        link.forEach(el => {
            el.addEventListener('click', () =>{
                langEl.querySelector('.active').classList.remove('active');
                el.classList.add('active');

                const attr = el.getAttribute('language');

                homeEl.textContent = data[attr].home;
                aboutEl.textContent = data[attr].about;
                skillEl.textContent = data[attr].skill;
                portfolioEl.textContent = data[attr].portfolio;
                portEl.textContent = data[attr].port;
                resumeEl.textContent = data[attr].resume;
                contactEl.textContent = data[attr].contact;
                introEl.textContent = data[attr].intro;
                heroEl.textContent = data[attr].hero;
                portBtnEl.textContent = data[attr].portBtn;
                resumeBtnEl.textContent = data[attr].resumeBtn;
                aboutMeTitleEl.textContent = data[attr].aboutMeTitle;
                textEl.textContent = data[attr].text;
                skillTitleEl.textContent = data[attr].skillTitle;
                languageEl.textContent = data[attr].language;
                verConEl.textContent = data[attr].verCon;
                DBEl.textContent = data[attr].DB;
                portTitleEl.textContent = data[attr].portTitle;
                view1El.textContent = data[attr].view1;
                view2El.textContent = data[attr].view2;
                resumeTitleEl.textContent = data[attr].resumeTitle;
                backgroundEl.textContent = data[attr].background;
                appealEl.textContent = data[attr].appeal;
                lefttextEl.textContent = data[attr].lefttext;
                moreTextLEl.textContent = data[attr].moreTextL;
                readmoreEl.textContent = data[attr].readmore;
                righttextEl.textContent = data[attr].righttext;
                moreTextREl.textContent = data[attr].moreTextR;
                hireMeEl.textContent = data[attr].hireMe;
                contactTitleEl.textContent = data[attr].contactTitle;
                contactTEl.textContent = data[attr].contactT;
            })
        })

        var data = 
        {
            "english":{
                "home": "HOME",
                "about": "ABOUT",
                "skill": "SKILLS",
                "portfolio": "PORTFOLIO",
                "port": "Portfolio",
                "resume": "RESUME",
                "contact": "CONTACT",
                "intro": "Hi there! I'm Hnin Wutye Thaung",
                "hero": "TRYING TO BE A FRONTEND WEB DEVELOPER",
                "portBtn": "VIEW PORTFOLIO",
                "resumeBtn":　"VIEW RESUME",
                "aboutMeTitle": "about me",
                "text": "Hi there!　I'm　Hnin Wutye Thaung. I'm from Myanmar and now I'm living in Okayama prefecture of Japan.　I have graduated from Yezin Agriculture University of Myanmar in 2017.　I'm trying to be a frontend web developer.　My goal for 2022 is to change my career as a web developer.　I have learned HTML, CSS, JavaScript by self-study, and in the future I want to be a full stack web developer.　I love travelling and spend time with friends.　Please, have a look on my portfolio and check my skill to make sure that I'm adoptable for your work position.",
                "skillTitle": "My Skills",
                "language": "Language",
                "verCon": "Version Control",
                "DB": "Database",
                "portTitle": "MY PORTFOLIO",
                "view1": "VIEW PORTFOLIO",
                "view2": "VIEW PORTFOLIO",
                "resumeTitle": "RESUME",
                "background":"Background",
                "appeal":"My Appeal",
                "lefttext": "I’m Hnin Wutye Thaung. Now I’m 25 years old and I’m from Myanmar. I have graduated from Yezin Agriculture University of Myanmar in 2017. My major subject is Horticulture and Agricultural Biotechnology. I have come to Japan since 2018 October, so I have been here for more than 3 years. I have worked as an agriculturalist and I noticed that I can’t work as an agriculturalist for my whole life and I decided to change my career and I’ve searched for  the career that fits me most.",
                "moretextL": "And nowadays, I realize that in our daily life, we use the Web services and our life becomes more convenientand more reliable. So I think that I would like to become a person who creates that  kind of web services. Then I decided to become a web developer.",
                "readmore": "READ MORE",
                "righttext": "I have studied HTML, CSS,JAVASCRIPT by self study and I’ve made three portfolios on my own, Of course I referenced the other's sources. For now I’m trying to become a frontend web developer and in the future I will try to become a full stack web developer. From now I will be going to learn the technology that is necessary for frontend development like framework, UI/UX and others to become a good frontend web developer.",
                "moretextR": "Thank you for looking forward me. I'm very glad to be in touch with you and may be I will get a chance to work together with you. For now I'm an inexperienced, but I do believe that I will be one of the best web developers in the future.",
                "hireMe": "HIRE ME NOW",
                "contactTitle": "CONTACR ME",
                "contactT": "Get in touch with me, or follow me on:",

            },
            "japanese":{
                "home": "ホーム",
                "about": "私について",
                "skill": "スキル",
                "portfolio": "ポートフォリオ",
                "port": "ポートフォリオ",
                "resume": "履歴書",
                "contact": "問い合わせ",
                "intro": "ニンウィッイータウンです。",
                "hero": "フロントエンドエンジニアになるため頑張ってます。",
                "portBtn": "ポートフォリオを見る",
                "resumeBtn": "履歴書を見る",
                "aboutMeTitle": "私について",
                "text": "初めまして。 ニンウィッイータウンです。　ミャンマーから参りまして、現在岡山県に住んでます。　2017年にミャンマーのYezin農業大学を卒業しました。　フロントエンドのウェブ開発者になるため頑張っています。　2022年の私の目標はウェブ開発者として転職出来ることです。　私は独学でHTML、CSS、JavaScriptを学んで来ました。　将来は、フルスタックのウェブ開発者になりたいと思っています。　私は旅行することと、友達と時間過ごすことが好きです。　私のポートフォリオを見て、私のスキルをチェックして、私は貴社が求めてる求人のポジションに合ってるかをご確認ください。　　どうぞよろしくお願いいたします",
                "skillTitle": "スキル",
                "language": "プログラミング言語",
                "verCon": "バーション管理",
                "DB": "データベース",
                "portTitle": "ポートフォリオ",
                "view1": "ポートフォリオを見る",
                "view2": "ポートフォリオを見る",
                "resumeTitle": "履歴書",
                "background":"転職理由",
                "appeal":"アピール",
                "lefttext": "ニンウィッイータウンと申します。　今は25歳で、ミャンマー出身です。　2017年に園芸及び農業バイオテクノロジ分野でミャンマーのイェジン農業大学を卒業しました。　私は農業者として日本で3年以上働いてきまして、一生農業従事者として働きつづくことができない事に気づきました。　キャリアを変えることに決め、自分に最も合ったキャリアを探しました。",
                "moretextL": "現代、私たちの日常生活の中でウェブサービスを利用し、生活がより便利になっていることに気づき、そういうウェブサービスを作る人間になりたいと思いました。　それから私はウェブ開発者になることに決めました。",
                "readmore": "もっと見る",
                "righttext": "HTML、CSS、JAVASCRIPTを独学で勉強し、3つのポートフォリオを作成しました。もちろん、他のソースを参照しました。　今のところ、フロントエンドウェブ開発者になろうとしていますが、将来的にはフルスタックのウェブ開発者になりたいと思います。　これからは、フレームワークやUI/UXなどのフロントエンド開発に必要な技術を学び、優れたフロントエンドウェブ開発者になります。",
                "moretextR": "ご覧になってくれてありがとう。　そして私は弊社と一緒に働く機会を得るかもしれませんと思って嬉しいです。　今のところ私は未経験ですが、将来的には最高のWeb開発者の1人になると信じています。",
                "hireMe": "採用する",
                "contactTitle": "問い合わせ",
                "contactT": "フォロー:",
            }
        }
        
    