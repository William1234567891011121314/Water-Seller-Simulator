function smartphone() {
    body.addEventListener('click', ev => {
        if(!ev.target.closest("#nav") && !ev.target.closest("button")){
            moneyclick(ev);
        }
    });
    main.removeChild(main.querySelector("#umafr"));
}