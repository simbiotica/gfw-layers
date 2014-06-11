App.Views.Timeline = Backbone.View.extend({

  className: 'timeline timeline-date-range',

  initialize: function() {
    this.dateRange = this.dateRange || [2001, moment().year()];
    this.conf = this.conf || {displayYears: true, displayMonths: true}

    // d3 slider objets
    this.svg = {};
    this.xscale = {};
    this.brush = {};
    this.slider = {};
    this.handlers = {
      left:{},
      right:{}
    };

    this.render();
  },

  render: function() {
    this.loadSlider();
    
    $('body').append(this.$el);
    return this.$el;
  },

  loadSlider: function() {
    var margin = {top: 0, right: 20, bottom: 0, left: 20},
        width = 800 - margin.left - margin.right,
        height = 40 - margin.bottom - margin.top;

    this.xscale = d3.scale.linear()
        .domain(this.dateRange)
        .range([0, width])
        .clamp(true);

    this.brush = d3.svg.brush()
        .x(this.xscale)
        .extent([0, 0])
        .on("brush", this.onBrush);

    this.svg = d3.select(this.el).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g") // wrapper
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
        .style("fill", 'red');

    this.svg.append("g") // line + dates
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height / 2 + ")")
        .call(d3.svg.axis()
          .scale(this.xscale)
          .orient("bottom")
          // .tickFormat(function(d) { return d + "°"; })
          .tickSize(0)
          .tickPadding(12))
      .select(".domain")
      .select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
        .attr("class", "halo");

    // slider!
    this.slider = this.svg.append("g") // group
        .attr("class", "slider")
        .call(this.brush);

    this.handlers.left = this.slider.append("circle")
        .attr("class", "handle")
        .attr("transform", "translate(0," + height / 2 + ")")
        .attr("r", 9)
        .attr("cx", 0)
        .style('fill', 'red');

    this.handlers.right = this.handlers.left
       .select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
       .attr('cx', 300)
       .style('fill', 'green');

    this.slider.selectAll(".extent,.resize")
        .remove();

    this.slider.select(".background")
        .attr("height", height);

    // load tipsy
    this.tipsy = this.svg.append('g')
        .attr('class', 'tipsy')
        .attr("transform", "translate(0, 0)");
      // .style('visibility', 'hidden')
    
    this.trail = this.tipsy.append('svg:line')
        .attr('class', 'trail')
        .attr('x1', 0)
        .attr('x2', 0)
        .attr('y1', 0)
        .attr('y2', height)
        .style('stroke', 'black');

    // this.tipsy.append('div')
    //   .attr('class', 'tooltip')
    //   .text('Year');


    this.brushTwo = d3.svg.brush()
        .x(this.xscale)
        .extent([0, 0])
        .on("brush", this.onTrailMove);
  },

  animate: function() {
    this.brushTwo.extent([2002, 2002]);
    
    this.trail
      .attr('x1', 0)
      .attr('x2', 0);

    this.slider
        .call(this.brushTwo.event)
      .transition()
        .duration(8000)
        .call(this.brushTwo.extent([2013, 2013]))
        .call(this.brushTwo.event);

    this.trail
      .transition()
      .duration(8000)
      .ease('linear')
      .attr('x1', 760)
      .attr('x2', 760);
  },

  onTrailMove: function() {
    var self = app.views.lossTimeline,
        value = self.brushTwo.extent()[0],
        timelineDate = app.models.layersPresenter.getLayer('loss').timelineDate;

    if (Math.round(value) !== timelineDate[1]) {
      self.updateTimelineDate([2002, Math.round(value)])
    }
  },

  onBrush: function() {
  },

});