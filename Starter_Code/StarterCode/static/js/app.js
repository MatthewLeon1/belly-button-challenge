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

  // Bubble Chart
  let trace2 = {
    x: person["otu_ids"],
    y: person["sample_values"],
    marker: {
      size: person["sample_values"],
      color: person["otu_ids"],
      colorscale: 'Viridis',
    },
    mode: 'markers',
    type: 'scatter',
    text: person["otu_labels"]
  };

  let formattedData2 = [trace2];

  // Define the layout for the chart
  let layout2 = {
    showlegend: false,
    xaxis: { title: 'OTU ID' },
    yaxis: { title: 'Sample Value' },
  };

  Plotly.newPlot("bubble", formattedData2, layout2);


  // Add meta-data
  let metaDiv = d3.select(".panel-body");
  console.log(metaDiv)

  let personMetadata = data['metadata'][0]
  
  metaDiv.append('p').text('id: ' + personMetadata["id"]);
  metaDiv.append('p').text('ethnicity: ' + personMetadata["ethnicity"]);
  metaDiv.append('p').text('gender: ' + personMetadata["gender"]);
  metaDiv.append('p').text('age: ' + personMetadata["age"]);
  metaDiv.append('p').text('location: ' + personMetadata["location"]);
  metaDiv.append('p').text('bbtype: ' + personMetadata["bbtype"]);
  metaDiv.append('p').text('wfreq: ' + personMetadata["wfreq"]);

});