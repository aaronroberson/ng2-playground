<h1>Welcome to Angular2 Meteor!<small class="pull-right">by Paul Bastowski 123</small></h1>
<div class="panel panel-default">
  <div class="panel-title panel-heading">Tests</div>
  <div class="panel-body">
    <!--p {{ items | json }}-->
    <p *ngFor="#item of items" *ngIf="!hideit">{{ item | json }}</p>
  </div>
</div>
<button on-click="hideit=1">Hide</button>
<button on-click="hideit=0">Show</button>