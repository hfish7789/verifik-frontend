!function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(self.webpackChunk_fuse_starter=self.webpackChunk_fuse_starter||[]).push([[107],{21107:function(r,o,n){n.r(o),n.d(o,{AuthForgotPasswordModule:function(){return F}});var i=n(63423),s=n(51095),a=n(98295),l=n(76627),d=n(49983),u=n(4885),c=n(92255),m=n(10588),f=n(44466),g=n(3679),p=n(68939),h=n(28288),w=n(37716),Z=n(88951),v=n(38583),x=n(13994),y=["forgotPasswordNgForm"];function A(e,t){if(1&e&&(w.TgZ(0,"fuse-alert",30),w._uU(1),w.qZA()),2&e){var r=w.oxw();w.Q6J("appearance","outline")("showIcon",!1)("type",r.alert.type)("@shake","error"===r.alert.type),w.xp6(1),w.hij(" ",r.alert.message," ")}}function b(e,t){1&e&&(w.TgZ(0,"mat-error"),w._uU(1," El telefono es requerido. "),w.qZA())}function q(e,t){1&e&&(w.TgZ(0,"mat-error"),w._uU(1," Ingrese un telefono valido. "),w.qZA())}function T(e,t){1&e&&(w.TgZ(0,"span"),w._uU(1," Enviar OTP "),w.qZA())}function _(e,t){1&e&&w._UZ(0,"mat-progress-spinner",31),2&e&&w.Q6J("diameter",24)("mode","indeterminate")}var k,U=function(){return["/sign-in"]},P=[{path:"",component:(k=function(){function r(t,o,n){e(this,r),this._authService=t,this._formBuilder=o,this.router=n,this.alert={type:"success",message:""},this.showAlert=!1}var o,n,i;return o=r,(n=[{key:"ngOnInit",value:function(){this.forgotPasswordForm=this._formBuilder.group({phone:["",[g.kI.required,g.kI.pattern("[- +()0-9]+")]]})}},{key:"sendResetLink",value:function(){var e=this;this.forgotPasswordForm.invalid||(this.forgotPasswordForm.disable(),this.showAlert=!1,this._authService.forgotPassword({phone:this.forgotPasswordForm.get("phone").value}).pipe((0,p.x)(function(){e.forgotPasswordForm.enable(),e.forgotPasswordNgForm.resetForm(),e.showAlert=!0})).subscribe(function(t){e.alert={type:"success",message:"Password reset sent! You'll receive an email if you are registered on our system."}},function(t){e.alert={type:"error",message:"Email does not found! Are you sure you are already a member?"}},function(){e.router.navigate(["/reset-password"])}))}}])&&t(o.prototype,n),i&&t(o,i),r}(),k.\u0275fac=function(e){return new(e||k)(w.Y36(Z.e),w.Y36(g.qu),w.Y36(i.F0))},k.\u0275cmp=w.Xpm({type:k,selectors:[["auth-forgot-password"]],viewQuery:function(e,t){var r;1&e&&w.Gf(y,5),2&e&&w.iGM(r=w.CRH())&&(t.forgotPasswordNgForm=r.first)},decls:45,vars:11,consts:[[1,"flex","flex-col","sm:flex-row","items-center","md:items-start","sm:justify-center","md:justify-start","flex-auto","min-w-0"],[1,"md:flex","md:items-center","md:justify-end","w-full","sm:w-auto","md:h-full","md:w-1/2","py-8","px-4","sm:p-12","md:p-16","sm:rounded-2xl","md:rounded-none","sm:shadow","md:shadow-none","sm:bg-card"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],[1,"w-12"],["src","https://cdn.gomat.co/verifik/logo.jpeg"],[1,"mt-8","text-4xl","font-extrabold","tracking-tight","leading-tight"],[1,"mt-0.5","font-medium"],["class","mt-8 -mb-4",3,"appearance","showIcon","type",4,"ngIf"],[1,"mt-8",3,"formGroup"],["forgotPasswordNgForm","ngForm"],[1,"w-full"],["id","phone","matInput","",3,"formControlName"],[4,"ngIf"],["mat-flat-button","",1,"fuse-mat-button-large","w-full","mt-3",3,"color","disabled","click"],[3,"diameter","mode",4,"ngIf"],[1,"mt-8","text-md","font-medium","text-secondary"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"],[1,"relative","hidden","md:flex","flex-auto","items-center","justify-center","w-1/2","h-full","p-16","lg:px-28","overflow-hidden","bg-gray-800","dark:border-l"],["viewBox","0 0 960 540","width","100%","height","100%","preserveAspectRatio","xMidYMax slice","xmlns","http://www.w3.org/2000/svg",1,"absolute","inset-0","pointer-events-none"],["fill","none","stroke","currentColor","stroke-width","100",1,"text-gray-700","opacity-25"],["r","234","cx","196","cy","23"],["r","234","cx","790","cy","491"],["viewBox","0 0 220 192","width","220","height","192","fill","none",1,"absolute","-top-16","-right-16","text-gray-700"],["id","837c3e70-6c3a-44e6-8854-cc48c737b659","x","0","y","0","width","20","height","20","patternUnits","userSpaceOnUse"],["x","0","y","0","width","4","height","4","fill","currentColor"],["width","220","height","192","fill","url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"],[1,"z-10","relative","w-full","max-w-2xl"],[1,"text-7xl","font-bold","leading-none","text-gray-100"],[1,"mt-6","text-lg","tracking-tight","leading-6","text-gray-400"],[1,"flex","items-center","mt-8"],[1,"mt-8","-mb-4",3,"appearance","showIcon","type"],[3,"diameter","mode"]],template:function(e,t){1&e&&(w.TgZ(0,"div",0),w.TgZ(1,"div",1),w.TgZ(2,"div",2),w.TgZ(3,"div",3),w._UZ(4,"img",4),w.qZA(),w.TgZ(5,"div",5),w._uU(6,"\xbfOlvidaste tu contrase\xf1a?"),w.qZA(),w.TgZ(7,"div",6),w._uU(8,"Llena el formulario para recuperarla"),w.qZA(),w.YNc(9,A,2,5,"fuse-alert",7),w.TgZ(10,"form",8,9),w.TgZ(12,"mat-form-field",10),w.TgZ(13,"mat-label"),w._uU(14,"Telefono"),w.qZA(),w._UZ(15,"input",11),w.YNc(16,b,2,0,"mat-error",12),w.YNc(17,q,2,0,"mat-error",12),w.qZA(),w.TgZ(18,"button",13),w.NdJ("click",function(){return t.sendResetLink()}),w.YNc(19,T,2,0,"span",12),w.YNc(20,_,1,2,"mat-progress-spinner",14),w.qZA(),w.TgZ(21,"div",15),w.TgZ(22,"span"),w._uU(23,"Regresar a "),w.qZA(),w.TgZ(24,"a",16),w._uU(25,"inicio de sesion "),w.qZA(),w.qZA(),w.qZA(),w.qZA(),w.qZA(),w.TgZ(26,"div",17),w.O4$(),w.TgZ(27,"svg",18),w.TgZ(28,"g",19),w._UZ(29,"circle",20),w._UZ(30,"circle",21),w.qZA(),w.qZA(),w.TgZ(31,"svg",22),w.TgZ(32,"defs"),w.TgZ(33,"pattern",23),w._UZ(34,"rect",24),w.qZA(),w.qZA(),w._UZ(35,"rect",25),w.qZA(),w.kcU(),w.TgZ(36,"div",26),w.TgZ(37,"div",27),w.TgZ(38,"div"),w._uU(39,"Bienvenido a Verifik"),w.qZA(),w.TgZ(40,"div"),w._uU(41,"Nueva versi\xf3n de MisDatos.com.co"),w.qZA(),w.qZA(),w.TgZ(42,"div",28),w._uU(43," Estamos migrando poco a poco de MisDatos a Verifik, por lo tanto varios endpoints cambiar\xe1n y se mejorar\xe1 el rendimiento y el servicio de cada uno de ellos. "),w.qZA(),w._UZ(44,"div",29),w.qZA(),w.qZA(),w.qZA()),2&e&&(w.xp6(9),w.Q6J("ngIf",t.showAlert),w.xp6(1),w.Q6J("formGroup",t.forgotPasswordForm),w.xp6(5),w.Q6J("formControlName","phone"),w.xp6(1),w.Q6J("ngIf",t.forgotPasswordForm.get("phone").hasError("required")),w.xp6(1),w.Q6J("ngIf",t.forgotPasswordForm.get("phone").hasError("phone")),w.xp6(1),w.Q6J("color","primary")("disabled",t.forgotPasswordForm.disabled),w.xp6(1),w.Q6J("ngIf",!t.forgotPasswordForm.disabled),w.xp6(1),w.Q6J("ngIf",t.forgotPasswordForm.disabled),w.xp6(4),w.Q6J("routerLink",w.DdM(10,U)))},directives:[v.O5,g._Y,g.JL,g.sg,a.KE,a.hX,d.Nt,g.Fj,g.JJ,g.u,s.lW,i.yS,x.W,a.TO,u.Ou],encapsulation:2,data:{animation:h.L}}),k)}],F=function(){var t=function t(){e(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=w.oAB({type:t}),t.\u0275inj=w.cJS({imports:[[i.Bz.forChild(P),s.ot,a.lN,l.Ps,d.c,u.Cq,c.J,m.fC,f.m]]}),t}()}}])}();