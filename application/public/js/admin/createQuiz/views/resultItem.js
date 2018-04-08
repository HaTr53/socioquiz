define([
        'backbone',
        'hbs!templates/resultItem',
        'appMan'
    ],
    function( Backbone, ResultItemTmpl, AppMan) {
        'use strict';

        /* Return a ItemView class definition */
        return Backbone.Marionette.ItemView.extend({

            initialize: function() {
                console.log("initialize a ResultItem ItemView");
                this.on('just-created', this.justCreated);
                this.listenTo(this.model, 'change', this.render);
            },

            template: ResultItemTmpl,
            className: 'col-md-4 col-sm-4 col-xs-6',

            /* ui selector cache */
            ui: {},

            /* Ui events hash */
            events: {
            },

            justCreated: function(){
                $(window).scrollTop(this.$el.offset().top - 100);
                this.$el.addClass('animated bounceIn');
            },
            /* on render callback */
            onRender: function() {
                var self = this;
            },
            templateHelpers: function(){
                var self = this;
                return {
                    serialNumber: function(){
                        return self.model.collection.indexOf(self.model) + 1;
                    }
                };
            }
        });
    });
