// Turn pages when clicking next or prev button
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');
const pages = document.querySelectorAll('.book-page.page-right');

let currentPage = 0;  // start at first page (index 0)

pageTurnBtn.forEach((el) => {
  el.onclick = () => {
    const targetPageId = el.getAttribute('data-page');
    const targetPage = document.getElementById(targetPageId);

    if (targetPage.classList.contains('turn')) {
      // Going backward
      targetPage.classList.remove('turn');
      currentPage--;

      setTimeout(() => {
        targetPage.style.zIndex = 20 - currentPage;
      }, 500);
    } else {
      // Going forward
      targetPage.classList.add('turn');
      currentPage++;

      setTimeout(() => {
        targetPage.style.zIndex = 20 + currentPage;
      }, 500);
    }
  }
});

// Contact Me button when clicked
const contactMeBtn = document.querySelector('.btn.contact-me');

contactMeBtn.onclick = (e) => {
  currentPage = pages.length; // simulate going to last page
  pages.forEach((page, index) => {
    setTimeout(() => {
      page.classList.add('turn');
      setTimeout(() => {
        page.style.zIndex = 20 + index;
      }, 500);
    }, (index + 1) * 200 + 100);
  });
}

// Back Profile button when clicked
const backProfileBtn = document.querySelector('.back-profile');

backProfileBtn.onclick = () => {
  pages.forEach((page, index) => {
    setTimeout(() => {
      page.classList.remove('turn');
      setTimeout(() => {
        page.style.zIndex = 10 + index;
      }, 500);
    }, (index + 1) * 200 + 100);
  });

  currentPage = 0; // Reset current page to start
}

// Opening animation
const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');

setTimeout(() => {
  coverRight.classList.add('turn');
}, 2100);

setTimeout(() => {
  coverRight.style.zIndex = -1;
}, 2800);

// Page left animation
setTimeout(() => {
  pageLeft.style.zIndex = 20;
}, 3200);

// Opening animation for right pages (reset to first page)
pages.forEach((page, index) => {
  setTimeout(() => {
    page.classList.remove('turn');
    setTimeout(() => {
      page.style.zIndex = 10 + index;
    }, 500);
  }, (index + 1) * 200 + 2100);
});

