import Realm from 'realm';
const Faveschema = {
  name: 'Fave', primaryKey: 'id',
  properties: {
    id: 'string',
    faved_on: 'date'
  },
}
  ;
const realm = new Realm({ schema: [FaveSchema] });

export const queryFaves = () => {
  let faves = realm.objects('Fave');
  return faves
}
export const createFave = (id) => {

  realm.write(() => {
    ream.create("Fave", {
      id: id,
      faved_on: new Date()
    })
  })

}

export const deleteFave = (id) => {
  realm.write(() => {
    const faveToDelete = realm.objects("Fave").filtered('id==$0', id);
    realm.delete(faveToDelete);
  })
}




export default realm;



