function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}


document.querySelector("#btm1").addEventListener("click", () => {
    const scrollHeight = document.body.scrollHeight;
    const scrollStep = Math.PI / (scrollHeight / 1.5); // Adjust the divisor for faster scrolling
    let count = 0;
    let isScrolling = true;
  
    function scrollToBottom() {
      if ((window.innerHeight + window.pageYOffset) >= scrollHeight || !isScrolling) {
        isScrolling = false;
        return;
      }
  
      count += 5;
      const newScrollTop = scrollHeight - (scrollHeight * Math.cos(count * scrollStep));
  
      window.scrollTo(0, newScrollTop);
      setTimeout(scrollToBottom, 10);
    }
  
    document.querySelector("#btm1").addEventListener("mousedown", () => {
      isScrolling = false;
    });
  
    document.querySelector("#btm1").addEventListener("mouseup", () => {
      isScrolling = true;
      scrollToBottom();
    });
  
    window.addEventListener("scroll", () => {
      if (window.innerHeight + window.pageYOffset >= scrollHeight) {
        isScrolling = false;
      } else {
        isScrolling = true;
      }
    });
  
    scrollToBottom();
  });

  document.querySelector("#btm").addEventListener("click", () => {
    const scrollHeight = document.body.scrollHeight;
    const scrollStep = Math.PI / (scrollHeight / 1.5); // Adjust the divisor for faster scrolling
    let count = 0;
    let isScrolling = true;
  
    function scrollToBottom() {
      if ((window.innerHeight + window.pageYOffset) >= scrollHeight || !isScrolling) {
        isScrolling = false;
        return;
      }
  
      count += 5;
      const newScrollTop = scrollHeight - (scrollHeight * Math.cos(count * scrollStep));
  
      window.scrollTo(0, newScrollTop);
      setTimeout(scrollToBottom, 10);
    }
  
    document.querySelector("#btm1").addEventListener("mousedown", () => {
      isScrolling = false;
    });
  
    document.querySelector("#btm1").addEventListener("mouseup", () => {
      isScrolling = true;
      scrollToBottom();
    });
  
    window.addEventListener("scroll", () => {
      if (window.innerHeight + window.pageYOffset >= scrollHeight) {
        isScrolling = false;
      } else {
        isScrolling = true;
      }
    });
  
    scrollToBottom();
  });
  
  
