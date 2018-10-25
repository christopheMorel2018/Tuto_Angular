import { Subject } from "rxjs";

export class AppareilService{
    
// https://openclassrooms.com/fr/courses/4668271-developpez-des-applications-web-avec-angular/5089331-observez-les-donnees-avec-rxjs

    appareilSubject = new Subject<any[]>();

    private appareils = [
        {
            id: 1,
          name: 'Machine à laver',
          status: 'éteint'
        },
        {
            id: 2,
          name: 'Télévision',
          status: 'allumé'
        },
        {
            id: 3,
          name: 'Ordinateur',
          status: 'éteint'
        }
      ];

      emitAppareilSubject()
      {
          this.appareilSubject.next(this.appareils.slice());
      }

      getAppareilById(id: number)
      {
         var appareil = this.appareils.find(
              (a) => {return a.id === id}
          );
         

          return appareil;
      }

      addAppareil(name: string, status: string)
      {
          const appareilObject = {
              id: 0,
              name: '',
              status: ''
          };

          appareilObject.name = name;
          appareilObject.status = status;
          appareilObject.id = this.appareils[(this.appareils.length-1)].id+1;
          
          this.appareils.push(appareilObject);
          this.emitAppareilSubject();
      }

      switchOnAll()
      {
          for (let appareil of this.appareils)
          {
                appareil.status='allumé';
          }
          this.emitAppareilSubject();
      }

      switchOffAll()
      {
          for (let appareil of this.appareils)
          {
                appareil.status='éteint';
          }
          this.emitAppareilSubject();
      }

      switchOnOne(index: number)
      {
          this.appareils[index].status='allumé';
          this.emitAppareilSubject();
      }

      switchOffOne(index: number)
      {
          this.appareils[index].status='éteint';
          this.emitAppareilSubject();
      }
}