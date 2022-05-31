(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{1106:function(t,e,a){"use strict";a.r(e);var s=a(4),l=a(118);a(203),a(204),a(213),a(216),a(220);function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function n(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var i={components:{"v-chart":l.a},metaInfo:{title:"Warehouse Report"},data:function(){return{Stock_Count:{},Stock_value:{},totalRows_quotations:"",totalRows_sales:"",totalRows_Return_sale:"",totalRows_Return_purchase:"",totalRows_Expense:"",limit_quotations:"10",limit_returns_Sale:"10",limit_returns_Purchase:"10",limit_sales:"10",limit_expenses:"10",search_quotation:"",search_sale:"",search_expense:"",search_return_Sale:"",search_return_Purchase:"",sales_page:1,quotations_page:1,Return_sale_page:1,Return_purchase_page:1,Expense_page:1,isLoading:!0,Filter_warehouse:"",sales:[],quotations:[],warehouses:[],expenses:[],returns_sale:[],returns_purchase:[],total:{sales:"",purchases:"",ReturnPurchase:"",ReturnSale:""}}},computed:n(n({},Object(s.c)(["currentUser"])),{},{columns_quotations:function(){return[{label:this.$t("date"),field:"date",tdClass:"text-left",thClass:"text-left",sortable:!1},{label:this.$t("Customer"),field:"client_name",tdClass:"text-left",thClass:"text-left"},{label:this.$t("Reference"),field:"Ref",tdClass:"text-left",thClass:"text-left",sortable:!1},{label:this.$t("Total"),field:"GrandTotal",tdClass:"text-left",thClass:"text-left",sortable:!1},{label:this.$t("Status"),field:"statut",tdClass:"text-left",thClass:"text-left",html:!0,sortable:!1}]},columns_sales:function(){return[{label:this.$t("Reference"),field:"Ref",tdClass:"text-left",thClass:"text-left",sortable:!1},{label:this.$t("Customer"),field:"client_name",tdClass:"text-left",thClass:"text-left"},{label:this.$t("Status"),field:"statut",html:!0,tdClass:"text-left",thClass:"text-left",sortable:!1},{label:this.$t("Total"),field:"GrandTotal",type:"decimal",tdClass:"text-left",thClass:"text-left",sortable:!1},{label:this.$t("Paid"),field:"paid_amount",type:"decimal",tdClass:"text-left",thClass:"text-left",sortable:!1},{label:this.$t("Due"),field:"due",type:"decimal",tdClass:"text-left",thClass:"text-left",sortable:!1},{label:this.$t("PaymentStatus"),field:"payment_status",html:!0,tdClass:"text-left",thClass:"text-left",sortable:!1}]},columns_returns_sale:function(){return[{label:this.$t("Reference"),field:"Ref",tdClass:"text-left",thClass:"text-left",sortable:!1},{label:this.$t("Customer"),field:"client_name",tdClass:"text-left",thClass:"text-left",sortable:!1},{label:this.$t("Status"),field:"statut",html:!0,tdClass:"text-left",thClass:"text-left",sortable:!1},{label:this.$t("Total"),field:"GrandTotal",type:"decimal",tdClass:"text-left",thClass:"text-left",sortable:!1},{label:this.$t("Paid"),field:"paid_amount",type:"decimal",tdClass:"text-left",thClass:"text-left",sortable:!1},{label:this.$t("Due"),field:"due",type:"decimal",tdClass:"text-left",thClass:"text-left",sortable:!1},{label:this.$t("PaymentStatus"),field:"payment_status",html:!0,tdClass:"text-left",thClass:"text-left",sortable:!1}]},columns_returns_purchase:function(){return[{label:this.$t("Reference"),field:"Ref",tdClass:"text-left",thClass:"text-left",sortable:!1},{label:this.$t("Supplier"),field:"provider_name",tdClass:"text-left",thClass:"text-left",sortable:!1},{label:this.$t("Status"),field:"statut",html:!0,tdClass:"text-left",thClass:"text-left",sortable:!1},{label:this.$t("Total"),field:"GrandTotal",type:"decimal",tdClass:"text-left",thClass:"text-left",sortable:!1},{label:this.$t("Paid"),field:"paid_amount",type:"decimal",tdClass:"text-left",thClass:"text-left",sortable:!1},{label:this.$t("Due"),field:"due",type:"decimal",tdClass:"text-left",thClass:"text-left",sortable:!1},{label:this.$t("PaymentStatus"),field:"payment_status",html:!0,tdClass:"text-left",thClass:"text-left",sortable:!1}]},columns_Expense:function(){return[{label:this.$t("date"),field:"date",tdClass:"text-left",thClass:"text-left",sortable:!1},{label:this.$t("Reference"),field:"Ref",tdClass:"text-left",thClass:"text-left",sortable:!1},{label:this.$t("Details"),field:"details",tdClass:"text-left",thClass:"text-left",sortable:!1},{label:this.$t("Amount"),field:"amount",type:"decimal",tdClass:"text-left",thClass:"text-left",sortable:!1},{label:this.$t("Categorie"),field:"category_name",tdClass:"text-left",thClass:"text-left",sortable:!1}]}}),methods:{formatNumber:function(t,e){var a=("string"==typeof t?t:t.toString()).split(".");if(e<=0)return a[0];var s=a[1]||"";if(s.length>e)return"".concat(a[0],".").concat(s.substr(0,e));for(;s.length<e;)s+="0";return"".concat(a[0],".").concat(s)},Selected_Warehouse:function(t){null===t&&(this.Filter_warehouse=""),this.Get_Reports(),this.Get_Sales(1),this.Get_Quotations(1),this.Get_Returns_Sale(1),this.Get_Returns_Purchase(1),this.Get_Expenses(1)},Get_Reports:function(){var t=this;axios.get("report/Warehouse_Report?warehouse_id="+this.Filter_warehouse).then((function(e){t.total=e.data.data,t.warehouses=e.data.warehouses})).catch((function(t){}))},PageChangeSales:function(t){var e=t.currentPage;this.sales_page!==e&&this.Get_Sales(e)},onPerPageChangeSales:function(t){var e=t.currentPerPage;this.limit_sales!==e&&(this.limit_sales=e,this.Get_Sales(1))},onSearch_Sales:function(t){this.search_sale=t.searchTerm,this.Get_Sales(1)},Get_Sales:function(t){var e=this;axios.get("report/Sales_Warehouse?page="+t+"&limit="+this.limit_sales+"&warehouse_id="+this.Filter_warehouse+"&search="+this.search_sale).then((function(t){e.sales=t.data.sales,e.totalRows_sales=t.data.totalRows,setTimeout((function(){e.isLoading=!1}),500)})).catch((function(t){setTimeout((function(){e.isLoading=!1}),500)}))},PageChangeQuotation:function(t){var e=t.currentPage;this.quotations_page!==e&&this.Get_Quotations(e)},onPerPageChangeQuotation:function(t){var e=t.currentPerPage;this.limit_quotations!==e&&(this.limit_quotations=e,this.Get_Quotations(1))},onSearch_Quotations:function(t){this.search_quotation=t.searchTerm,this.Get_Quotations(1)},Get_Quotations:function(t){var e=this;axios.get("report/Quotations_Warehouse?page="+t+"&limit="+this.limit_quotations+"&warehouse_id="+this.Filter_warehouse+"&search="+this.search_quotation).then((function(t){e.quotations=t.data.quotations,e.totalRows_quotations=t.data.totalRows})).catch((function(t){}))},PageChangeReturn_Customer:function(t){var e=t.currentPage;this.Return_sale_page!==e&&this.Get_Returns_Sale(e)},onPerPageChangeReturn_Sale:function(t){var e=t.currentPerPage;this.limit_returns_Sale!==e&&(this.limit_returns_Sale=e,this.Get_Returns_Sale(1))},onSearch_Return_Sale:function(t){this.search_return_Sale=t.searchTerm,this.Get_Returns_Sale(1)},Get_Returns_Sale:function(t){var e=this;axios.get("report/Returns_Sale_Warehouse?page="+t+"&limit="+this.limit_returns_Sale+"&warehouse_id="+this.Filter_warehouse+"&search="+this.search_return_Sale).then((function(t){e.returns_sale=t.data.returns_sale,e.totalRows_Return_sale=t.data.totalRows})).catch((function(t){}))},PageChangeReturn_Purchase:function(t){var e=t.currentPage;this.Return_purchase_page!==e&&this.Get_Returns_Purchase(e)},onPerPageChangeReturn_Purchase:function(t){var e=t.currentPerPage;this.limit_returns_Purchase!==e&&(this.limit_returns_Purchase=e,this.Get_Returns_Purchase(1))},onSearch_Return_Purchase:function(t){this.search_return_Purchase=t.searchTerm,this.Get_Returns_Purchase(1)},Get_Returns_Purchase:function(t){var e=this;axios.get("report/Returns_Purchase_Warehouse?page="+t+"&limit="+this.limit_returns_Purchase+"&warehouse_id="+this.Filter_warehouse+"&search="+this.search_return_Purchase).then((function(t){e.returns_purchase=t.data.returns_purchase,e.totalRows_Return_purchase=t.data.totalRows})).catch((function(t){}))},PageChange_Expense:function(t){var e=t.currentPage;this.Expense_page!==e&&this.Get_Expenses(e)},onPerPageChange_Expense:function(t){var e=t.currentPerPage;this.limit_expenses!==e&&(this.limit_expenses=e,this.Get_Expenses(1))},onSearch_Expense:function(t){this.search_expense=t.searchTerm,this.Get_Expenses(1)},Get_Expenses:function(t){var e=this;axios.get("report/Expenses_Warehouse?page="+t+"&limit="+this.limit_expenses+"&warehouse_id="+this.Filter_warehouse+"&search="+this.search_expense).then((function(t){e.expenses=t.data.expenses,e.totalRows_Expense=t.data.totalRows})).catch((function(t){}))},report_with_echart:function(){var t=this;axios.get("report/Warhouse_Count_Stock").then((function(e){var a=e.data;t.Stock_Count={color:["#6D28D9","#A78BFA","#7C3AED","#8B5CF6","#C4B5FD"],tooltip:{show:!0,backgroundColor:"rgba(0, 0, 0, .8)",formatter:function(t){return"(".concat(t.value," Items)<br />\n                        (").concat(t.data.value1," Quantity)")}},legend:{orient:"vertical",left:"left",data:a.warehouses},series:[{name:"Warehouse Stock",type:"pie",radius:"50%",center:"50%",data:a.stock_count,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]},t.Stock_value={color:["#6D28D9","#A78BFA","#7C3AED","#8B5CF6","#C4B5FD"],tooltip:{show:!0,backgroundColor:"rgba(0, 0, 0, .8)",formatter:function(t){return"(Stock Value by Price : ".concat(t.value,")<br />\n                        (Stock Value by Cost : ").concat(t.data.value1,")")}},legend:{orient:"vertical",left:"left",data:a.warehouses},series:[{name:"Warehouse Stock",type:"pie",radius:"50%",center:"50%",data:a.stock_value,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]}})).catch((function(t){}))}},created:function(){this.report_with_echart(),this.Get_Reports(),this.Get_Sales(1),this.Get_Quotations(1),this.Get_Returns_Sale(1),this.Get_Returns_Purchase(1),this.Get_Expenses(1)}},c=a(2),u=Object(c.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-content"},[a("breadcumb",{attrs:{page:t.$t("Warehouse_report"),folder:t.$t("Reports")}}),t._v(" "),t.isLoading?a("div",{staticClass:"loading_page spinner spinner-primary mr-3"}):t._e(),t._v(" "),t.isLoading?t._e():a("b-row",{staticClass:"justify-content-center mb-5"},[a("b-col",{attrs:{lg:"3",md:"6",sm:"12"}},[a("b-form-group",{attrs:{label:t.$t("warehouse")}},[a("v-select",{attrs:{reduce:function(t){return t.value},placeholder:t.$t("All_Warehouses"),options:t.warehouses.map((function(t){return{label:t.name,value:t.id}}))},on:{input:t.Selected_Warehouse},model:{value:t.Filter_warehouse,callback:function(e){t.Filter_warehouse=e},expression:"Filter_warehouse"}})],1)],1)],1),t._v(" "),t.isLoading?t._e():a("b-row",[a("b-col",{attrs:{lg:"3",md:"6",sm:"12"}},[a("b-card",{staticClass:"card-icon-bg card-icon-bg-primary o-hidden mb-30 text-center"},[a("i",{staticClass:"i-Full-Cart"}),t._v(" "),a("div",{staticClass:"content"},[a("p",{staticClass:"text-muted mt-2 mb-0"},[t._v(t._s(t.$t("Sales")))]),t._v(" "),a("p",{staticClass:"text-primary text-24 line-height-1 mb-2"},[t._v(t._s(t.total.sales))])])])],1),t._v(" "),a("b-col",{attrs:{lg:"3",md:"6",sm:"12"}},[a("b-card",{staticClass:"card-icon-bg card-icon-bg-primary o-hidden mb-30 text-center"},[a("i",{staticClass:"i-Checkout-Basket"}),t._v(" "),a("div",{staticClass:"content"},[a("p",{staticClass:"text-muted mt-2 mb-0"},[t._v(t._s(t.$t("Purchases")))]),t._v(" "),a("p",{staticClass:"text-primary text-24 line-height-1 mb-2"},[t._v(t._s(t.total.purchases))])])])],1),t._v(" "),a("b-col",{attrs:{lg:"3",md:"6",sm:"12"}},[a("b-card",{staticClass:"card-icon-bg card-icon-bg-primary o-hidden mb-30 text-center"},[a("i",{staticClass:"i-Turn-Left"}),t._v(" "),a("div",{staticClass:"content"},[a("p",{staticClass:"text-muted mt-2 mb-0"},[t._v(t._s(t.$t("PurchasesReturn")))]),t._v(" "),a("p",{staticClass:"text-primary text-24 line-height-1 mb-2"},[t._v(t._s(t.total.ReturnPurchase))])])])],1),t._v(" "),a("b-col",{attrs:{lg:"3",md:"6",sm:"12"}},[a("b-card",{staticClass:"card-icon-bg card-icon-bg-primary o-hidden mb-30 text-center"},[a("i",{staticClass:"i-Turn-Right"}),t._v(" "),a("div",{staticClass:"content"},[a("p",{staticClass:"text-muted mt-2 mb-0"},[t._v(t._s(t.$t("SalesReturn")))]),t._v(" "),a("p",{staticClass:"text-primary text-24 line-height-1 mb-2"},[t._v(t._s(t.total.ReturnSale))])])])],1)],1),t._v(" "),t.isLoading?t._e():a("b-row",[a("b-col",{attrs:{md:"12"}},[a("b-card",{staticClass:"card mb-30",attrs:{"no-body":"","header-bg-variant":"transparent "}},[a("b-tabs",{attrs:{"active-nav-item-class":"nav nav-tabs","content-class":"mt-3"}},[a("b-tab",{attrs:{title:t.$t("Quotations")}},[a("vue-good-table",{attrs:{mode:"remote",columns:t.columns_quotations,totalRows:t.totalRows_quotations,rows:t.quotations,"search-options":{placeholder:t.$t("Search_this_table"),enabled:!0},"pagination-options":{enabled:!0,mode:"records",nextLabel:"next",prevLabel:"prev"},styleClass:"order-table vgt-table mt-2"},on:{"on-page-change":t.PageChangeQuotation,"on-per-page-change":t.onPerPageChangeQuotation,"on-search":t.onSearch_Quotations},scopedSlots:t._u([{key:"table-row",fn:function(e){return["statut"==e.column.field?a("div",["sent"==e.row.statut?a("span",{staticClass:"badge badge-outline-success"},[t._v(t._s(t.$t("Sent")))]):a("span",{staticClass:"badge badge-outline-info"},[t._v(t._s(t.$t("Pending")))])]):t._e()]}}],null,!1,55538325)})],1),t._v(" "),a("b-tab",{attrs:{title:t.$t("Sales")}},[a("vue-good-table",{attrs:{mode:"remote",columns:t.columns_sales,totalRows:t.totalRows_sales,rows:t.sales,"search-options":{placeholder:t.$t("Search_this_table"),enabled:!0},"pagination-options":{enabled:!0,mode:"records",nextLabel:"next",prevLabel:"prev"},styleClass:"order-table vgt-table mt-2"},on:{"on-page-change":t.PageChangeSales,"on-per-page-change":t.onPerPageChangeSales,"on-search":t.onSearch_Sales},scopedSlots:t._u([{key:"table-row",fn:function(e){return["statut"==e.column.field?a("div",["completed"==e.row.statut?a("span",{staticClass:"badge badge-outline-success"},[t._v(t._s(t.$t("complete")))]):"pending"==e.row.statut?a("span",{staticClass:"badge badge-outline-info"},[t._v(t._s(t.$t("Pending")))]):a("span",{staticClass:"badge badge-outline-warning"},[t._v(t._s(t.$t("Ordered")))])]):"payment_status"==e.column.field?a("div",["paid"==e.row.payment_status?a("span",{staticClass:"badge badge-outline-success"},[t._v(t._s(t.$t("Paid")))]):"partial"==e.row.payment_status?a("span",{staticClass:"badge badge-outline-primary"},[t._v(t._s(t.$t("partial")))]):a("span",{staticClass:"badge badge-outline-warning"},[t._v(t._s(t.$t("Unpaid")))])]):t._e()]}}],null,!1,2617766521)})],1),t._v(" "),a("b-tab",{attrs:{title:t.$t("SalesReturn")}},[a("vue-good-table",{attrs:{mode:"remote",columns:t.columns_returns_sale,totalRows:t.totalRows_Return_sale,rows:t.returns_sale,"pagination-options":{enabled:!0,mode:"records",nextLabel:"next",prevLabel:"prev"},"search-options":{placeholder:t.$t("Search_this_table"),enabled:!0},styleClass:"order-table vgt-table mt-2"},on:{"on-page-change":t.PageChangeReturn_Customer,"on-per-page-change":t.onPerPageChangeReturn_Sale,"on-search":t.onSearch_Return_Sale},scopedSlots:t._u([{key:"table-row",fn:function(e){return["statut"==e.column.field?a("div",["received"==e.row.statut?a("span",{staticClass:"badge badge-outline-success"},[t._v(t._s(t.$t("Received")))]):a("span",{staticClass:"badge badge-outline-info"},[t._v(t._s(t.$t("Pending")))])]):"payment_status"==e.column.field?a("div",["paid"==e.row.payment_status?a("span",{staticClass:"badge badge-outline-success"},[t._v(t._s(t.$t("Paid")))]):"partial"==e.row.payment_status?a("span",{staticClass:"badge badge-outline-primary"},[t._v(t._s(t.$t("partial")))]):a("span",{staticClass:"badge badge-outline-warning"},[t._v(t._s(t.$t("Unpaid")))])]):t._e()]}}],null,!1,4274434333)})],1),t._v(" "),a("b-tab",{attrs:{title:t.$t("PurchasesReturn")}},[a("vue-good-table",{attrs:{mode:"remote",columns:t.columns_returns_purchase,totalRows:t.totalRows_Return_purchase,rows:t.returns_purchase,"pagination-options":{enabled:!0,mode:"records",nextLabel:"next",prevLabel:"prev"},"search-options":{placeholder:t.$t("Search_this_table"),enabled:!0},styleClass:"order-table vgt-table mt-2"},on:{"on-page-change":t.PageChangeReturn_Purchase,"on-per-page-change":t.onPerPageChangeReturn_Purchase,"on-search":t.onSearch_Return_Purchase},scopedSlots:t._u([{key:"table-row",fn:function(e){return["statut"==e.column.field?a("div",["completed"==e.row.statut?a("span",{staticClass:"badge badge-outline-success"},[t._v(t._s(t.$t("complete")))]):a("span",{staticClass:"badge badge-outline-info"},[t._v(t._s(t.$t("Pending")))])]):"payment_status"==e.column.field?a("div",["paid"==e.row.payment_status?a("span",{staticClass:"badge badge-outline-success"},[t._v(t._s(t.$t("Paid")))]):"partial"==e.row.payment_status?a("span",{staticClass:"badge badge-outline-primary"},[t._v(t._s(t.$t("partial")))]):a("span",{staticClass:"badge badge-outline-warning"},[t._v(t._s(t.$t("Unpaid")))])]):t._e()]}}],null,!1,2902550969)})],1),t._v(" "),a("b-tab",{attrs:{title:t.$t("Expenses")}},[a("vue-good-table",{attrs:{mode:"remote",columns:t.columns_Expense,totalRows:t.totalRows_Expense,rows:t.expenses,"pagination-options":{enabled:!0,mode:"records",nextLabel:"next",prevLabel:"prev"},"search-options":{placeholder:t.$t("Search_this_table"),enabled:!0},styleClass:"order-table vgt-table mt-2"},on:{"on-page-change":t.PageChange_Expense,"on-per-page-change":t.onPerPageChange_Expense,"on-search":t.onSearch_Expense}})],1)],1)],1)],1)],1),t._v(" "),t.isLoading?t._e():a("b-row",{staticClass:"mt-3"},[a("b-col",{attrs:{lg:"6",md:"12",sm:"12"}},[a("b-card",{staticClass:"mb-30"},[a("h4",{staticClass:"card-title m-0"},[t._v(t._s(t.$t("Total_Items_Quantity")))]),t._v(" "),a("div",{staticClass:"chart-wrapper mt-3"},[a("v-chart",{attrs:{options:t.Stock_Count,autoresize:!0}})],1)])],1),t._v(" "),a("b-col",{attrs:{col:"",lg:"6",md:"12",sm:"12"}},[a("b-card",{staticClass:"mb-30"},[a("h4",{staticClass:"card-title m-0"},[t._v(t._s(t.$t("Value_by_Cost_and_Price")))]),t._v(" "),a("div",{staticClass:"chart-wrapper mt-3"},[a("v-chart",{attrs:{options:t.Stock_value,autoresize:!0}})],1)])],1)],1)],1)}),[],!1,null,null,null);e.default=u.exports}}]);