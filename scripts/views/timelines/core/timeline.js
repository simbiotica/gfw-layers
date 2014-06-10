App.Views.Timeline = Backbone.View.extend({

  className: 'timeline timeline-date-range',

  events: {
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    var margin = {top: 0, right: 20, bottom: 0, left: 20},
        width = 800 - margin.left - margin.right,
        height = 40 - margin.bottom - margin.top;

    var x = d3.scale.linear()
        .domain([2002, 2015])
        .range([0, width])
        .clamp(true);

    var brush = d3.svg.brush()
        .x(x)
        .extent([0, 0])
        .on("brush", brushed);

    var svg = d3.select(this.el).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g") // wrapper
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
        .style("fill", 'red');

    svg.append("g") // line + dates
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height / 2 + ")")
        .style('fill', 'green')
        .call(d3.svg.axis()
          .scale(x)
          .orient("bottom")
          // .tickFormat(function(d) { return d + "°"; })
          .tickSize(0)
          .tickPadding(12))
      .select(".domain")
      .select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
        .attr("class", "halo");

    // slider!
    var slider = svg.append("g") // group
        .attr("class", "slider")
        .call(brush);

    var handleLeft = slider.append("circle")
        .attr("class", "handle")
        .attr("transform", "translate(0," + height / 2 + ")")
        .attr("r", 9)
        .attr("cx", 40)
        .style('fill', 'red');

    var handleRight = handleLeft
      .select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
      .attr('cx', 300)
      .style('fill', 'green');

    slider
        .call(brush.event)
      .transition() // gratuitous intro!
        .duration(8000)
        .call(brush.extent([84, 84]))
        .call(brush.event);

    slider.selectAll(".extent,.resize")
        .remove();

    slider.select(".background")
        .attr("height", height);

    function brushed() {
      var value = brush.extent()[0];

      if (d3.event.sourceEvent) { // not a programmatic event
        value = x.invert(d3.mouse(this)[0]);
        brush.extent([value, value]);
      }

      var hl = handleLeft.attr("cx"),
          hr = handleRight.attr("cx");

      if (Math.abs(x(value) - hr) < Math.abs(x(value) - hl)) {
        handleRight.attr("cx", x(value));
      } else {
        handleLeft.attr("cx", x(value));
      }

      // d3.select("body").style("background-color", d3.hsl(value, .8, .8));
    }

    $('body').append(this.$el);
    return this.$el;
  }

});