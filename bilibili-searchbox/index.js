function search()
 {

    if (document.getElementById("search_input").value != "")
 {

        window.location.href = "https://search.bilibili.com/all?keyword=" + document.getElementById("search_input").value;

        document.getElementById("search_input").value = "";

    }

    return false;

}
