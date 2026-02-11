function showPage(index) {

    let pages = document.querySelectorAll('.content');
    pages.forEach(page => page.classList.add('hidden'));

    document.getElementById('page'+ index).classList.remove('hidden');
}




