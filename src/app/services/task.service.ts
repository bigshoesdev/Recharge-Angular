import { Injectable } from '@angular/core';
let log = console.log

@Injectable()
export class TaskService {

  constructor() { }


      // for: 'topup',
      // name: 'log',
      // data: {
      //   test: 1
      // }
      
      
  setTask(task_obj){
    log('in setTask (give start obj): ', task_obj)
    let all_tasks = JSON.parse(localStorage.getItem('allTasks'))
    log('all_tasks: ', all_tasks)

    if (all_tasks == null) all_tasks = {}

    all_tasks[task_obj.for] = {
      name: task_obj.name,
      data: task_obj.data
    }

    localStorage.setItem('allTasks', JSON.stringify(all_tasks))
    log('All tasks: ', all_tasks)
  }


  removeTask(_for){
    log('in removeTask (give start obj): ', _for)
    let all_tasks = JSON.parse(localStorage.getItem('allTasks'))
    log('all_tasks: ', all_tasks)

    if (all_tasks == null) all_tasks = {}

    all_tasks[_for] = {}

    localStorage.setItem('allTasks', JSON.stringify(all_tasks))
    log('All tasks: ', all_tasks)    
  }

  checkTask(_for) {
    log('in chekTask (give start obj): ', _for)
    let all_tasks = JSON.parse(localStorage.getItem('allTasks'))
    log('all_tasks: ', all_tasks)
    // chek _for
    if (all_tasks[_for] && all_tasks[_for] !== {}) 
      return all_tasks[_for]
    else 
      return false
  }

}
