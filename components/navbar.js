import createElement from "../scripts/createElement.js";

const nav_btns_$arr = [
    [   // constant links
        { text: 'خانه', ico: 'home', link: '#', },
        { text: 'اکسپلور', ico: 'explore', link: '', },
    ],
    [   // did not logged in links
        { text: 'ثبت نام', ico: 'sign-in', link: '', },
        { text: 'ورود', ico: 'log-in', link: '', },
    ],
    [   // logged in links
        { text: 'داشبورد', ico: 'dashboard', link: '', },
        { text: 'پروفایل', ico: 'profile', link: '', },
    ],
];
let pages_link='';

const nav_bar_$func = (user_status = false) => {
    let btns = [
        ...nav_btns_$arr[0],
        ...nav_btns_$arr[ user_status ? 2 : 1 ]
    ];
    btns.map(btn => {
        pages_link += `<a class="px-3 rounded-md py-1 sm:mb-0 mb-2 ml-2 bg-secondary" href="${btn.link}"> <i class="${btn.ico}"></i> ${btn.text} </a>`
    });
    pages_link = (`
        <div class="f-jcb-ic">
            <button id="ham-btn" class="z-10 sm:hidden bg-contain block bg-secondary ico-2 ham"></button>
            <div id="nav-btns" class="sm:relative px-6 sm:mt-0 mt-16 absolute right-0 sm:h-auto h- top-0 
            flex-col sm:flex-row sm:flex sm:justify-between justify-start items-start sm:items-center 
            hidden">${pages_link}</div>
        </div>
        <i class="artex-logo mr-auto"></i>
    `);

    (async ()=>{
        await createElement({
            tagName:'nav',
            inner:pages_link,
            cls:[
                'h-16', 'f-jcb-ic', 'w-full', 'bg-white', 'px-6', 'text-headLine', 
            ]
        });
        await document.querySelector('#ham-btn').addEventListener('click', ()=>{
            ['hidden', 'flex'].map(value=> document.querySelector('#nav-btns').classList.toggle(value))
        })
    })()
};

export default nav_bar_$func;