// // Get the endpoint
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

d3.json(url).then(function(data) {

    console.log(data["samples"]);

    let person = data["samples"][0];

    console.log("person",person);

    // TODO: access proper data and format for plotly
    let trace1 = {
        x: person["sample_values"].slice(0,10).reverse(),
        y: person["otu_ids"].slice(0,10).map(number => "OTU "+ number.toString()).reverse(),
        text: person["otu_labels"].slice(0,10).reverse(),
        type: 'bar',
        orientation: "h"
    };
      
    let formattedData = [trace1];
      
    let layout = {
        margin: {
          l: 100,
          r: 100,
          t: 100,
          b: 100
        }
      };

    Plotly.newPlot("plot", formattedData, layout);
});
