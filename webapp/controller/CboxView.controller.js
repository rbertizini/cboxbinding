sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel"
    ],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function(Controller, JSONModel) {
        "use strict";

        return Controller.extend("cboxbinding.controller.CboxView", {
            onInit: function() {

                //Carga do arquivo modelo.json
                var oModelo = new JSONModel("json/modelo.json");
                this.getView().setModel(oModelo, "DataMod");

                var oCategoria = new JSONModel("");
                this.getView().setModel(oCategoria, "DataCat");

                var oLivro = new JSONModel("");
                this.getView().setModel(oCategoria, "DataLiv");
            },

            //Carga de categoria baseado no combobox de modelo
            cboxCategData: function(oEvent) {
                var oCategoria = new JSONModel("json/categoria.json");
                this.getView().setModel(oCategoria, "DataCat");
                this.getView().byId("cboxCategoria").getBinding("items").filter([
                    new sap.ui.model.Filter(
                        "idmodelo",
                        "EQ",
                        oEvent.getParameter("selectedItem").getKey())
                ]);
            },

            //Carga de livros baseado no combobox de categoria
            cboxLivrData: function(oEvent) {

                var oLivro = new JSONModel("json/livro.json");
                this.getView().setModel(oLivro, "DataLiv");
                this.getView().byId("LstLivros").getBinding("items").filter([
                    new sap.ui.model.Filter(
                        "idcategoria",
                        "EQ",
                        oEvent.getParameter("selectedItem").getKey())
                ]);
            },
        });
    });