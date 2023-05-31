$(document).ready(function() {
  fetchContent();

  function fetchContent() {
    $.ajax({
      url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Website Content')/items?$select=*$top=1",
      method: "GET",
      headers: { "Accept": "application/json; odata=verbose" },
      success: function(data) {
        retrieveAllFields(data.d.results);
      },
      error: function(error) {
        console.error("Error fetching FAQs: ", error);
      }
    });
  }

  function retrieveAllFields(content) {
    var bannerTitle = '';
    bannerTitle = content[0].Banner_x002d_Title;
    console.log(bannerTitle);
    $('#banner-title').html(bannerTitle);
  }
});