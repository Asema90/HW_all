    input.addEventListener("click", () => alert("1"));
    input.removeEventListener("click", () => alert("1"));
    input.onclick = () => alert(2);