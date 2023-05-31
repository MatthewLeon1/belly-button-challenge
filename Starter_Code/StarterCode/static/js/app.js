// // Get the endpoint
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

d3.json(url).then(function(data) {

    console.log(data["samples"]);

    let person = data["samples"][0];

    console.log(person);

    // TODO: access proper data and format for plotly
    let trace1 = {
        x: person["otu_ids"],
        y: person["sample_values"],
        type: 'bar'
    };
      
    let formattedData = [trace1];
      
    title = "bellyButtonCRAP"
    let layout = {
        title: title
    };

    Plotly.newPlot("plot", formattedData, layout);
});
