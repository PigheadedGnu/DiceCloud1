Template.classDialog.events({
	"tap #deleteButton": function(event, instance){
		Classes.remove(instance.data.classId);
		GlobalUI.closeDetail()
	},
	"change #classNameInput": function(event){
		var value = event.currentTarget.value;
		Classes.update(this._id, {$set: {name: value}});
	},
	"change #levelValueInput": function(event){
		var value = event.currentTarget.value;
		Classes.update(this._id, {$set: {level: value}});
	}
});

Template.classDialog.helpers({
	class: function(){
		return Classes.findOne(this.classId);
	}
});