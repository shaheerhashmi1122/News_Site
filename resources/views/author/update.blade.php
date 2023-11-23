
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <title>Update News</title>
  </head>
  <body>
    <h1>Update News</h1>
    <form action="{{route('author.editform')}}" class="submit_form" method="POST" enctype="multipart/form-data">
      @csrf
      <input type="hidden" name="id" value="{{$data_id->id}}">
<div class="mb-3">
  <label for="exampleFormControlInput1"  class="form-label">Heading</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" name="heading" value="{{$data_id->heading}}">
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1"  class="form-label">Description</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" name="description" value="{{$data_id->description}}">
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Text</label>
  <textarea class="form-control" id="exampleFormControlTextarea1"  name="text" rows="3">{{$data_id->text}}</textarea>
</div>
<div class="mb-3">
  <label for="formFile" class="form-label">Upload Image</label>
  <input class="form-control" type="file" name="image" id="formFile">
  <img src="/news/{{$data_id->image}}" alt="No image">
</div>

<button type="submit" class="btn btn-success">Submit</button>
</form>
    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <script>
      $(document).on("submit", ".submit_form", function (e) {
      e.preventDefault();
    
    // toastr.info("Please wait your request has sent");

    var form = $(this);
    var submit_btn = $(form).find(".submit_btn");
    $(submit_btn).prop("disabled", true);
    $(submit_btn).closest("div").find(".loader").removeClass("d-none");
    // console.log(from);
    var data = new FormData(this);
    $(form).find(".submit_btn").prop("disabled", true);
    $.ajax({
        type: "POST",
        data: data,
        cache: !1,
        contentType: !1,
        processData: !1,
        url: $(form).attr("action"),
        async: true,
        headers: {
            "cache-control": "no-cache",
        },
        success: function (response) {
            window.location.href = '/author/shownews';
        },
        error: function (xhr, status, error) {
            $(submit_btn).prop("disabled", false);
            $(submit_btn).closest("div").find(".loader").addClass("d-none");
            if (xhr.status == 422) {
                $(form).find("div.alert").remove();
                var errorObj = xhr.responseJSON.errors;
                $.map(errorObj, function (value, index) {
                    var appendIn = $(form)
                        .find('[name="' + index + '"]')
                        .closest("div");
                    if (!appendIn.length) {
                        toastr.error(value[0]);
                    } else {
                        $(appendIn).append(
                            '<div class="alert alert-danger" style="padding: 1px 5px;font-size: 12px"> ' +
                                value[0] +
                                "</div>"
                        );
                    }
                });
                $(form).find(".submit_btn").prop("disabled", false);
            } else {
                $(form).find(".submit_btn").prop("disabled", false);
                toastr.error("Unknown Error!");
            }
        },
    });
})
    </script>
    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
    -->
  </body>
</html>