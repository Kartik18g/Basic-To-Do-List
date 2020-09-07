function AppendL() {
    val = document.getElementById("TxtInput").value;
    if (val == "") {
        alert("Nothing to add");
    } else {
        var pendingItem = document.createElement("div");
        var pendingList = document.getElementsByClassName("Pending")[0];
        let pendingItemContents = `
                                <input type="button" id="${val}"  onclick="Remove('${val}')" class="buttonstyle" value="X" />
                            <label for="button">${val}</label>
`;
        pendingItem.innerHTML = pendingItemContents;
        pendingList.append(pendingItem);

        document.getElementById("TxtInput").value = "";
    }
}

function Remove(id) {
    rem = document.getElementById(id);
    rem.parentElement.remove();
}

function inc(i) {
    i = i + 1;
    console.log(i);
}