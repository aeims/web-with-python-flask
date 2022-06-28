// the fetch() will create a request asking the API
// for something to do.
// so we are saying the request is /delete-notes and
// method for that is POST and we are sending info about 
// note id in the body so that the api will work correctly
//after sending request the page will reload by window.location
function deleteNote(noteId) {
  fetch("/delete-note", {
    method: "POST",
    body: JSON.stringify({ noteId: noteId }),
  }).then((_res) => {
    window.location.href = "/notes";
  });
}