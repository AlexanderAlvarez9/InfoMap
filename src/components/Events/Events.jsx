import { addDoc, collection, deleteDoc, doc, onSnapshot, query, updateDoc, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useUser } from 'reactfire';
import { db } from '../../firebase';
import CreateEvent from '../CreateEvent';
import './Events.scss';

const Events = () => {

  const [events, setEvents] = useState([]);
  const [currentId, setCurrentId] = useState('');
  const user = useUser();

  const addOrEditEvent = async (event) => {
    try {
      if (currentId === '') {
        await addDoc(collection(db, 'events'), event)
        toast('Nuevo Evento Agregado', {
          type: 'success',
          autoClose: 2000
        });
      } else {
        await updateDoc(doc(db, 'events', currentId), event)
        toast('Evento Actualizado', {
          type: 'info',
          autoClose: 2000
        });
      }
      setCurrentId('')
    } catch (error) {
      console.error(error);
    }
    console.log(event);
  }

  const handleDelete = async (id) => {
    if (window.confirm('Esta seguro?')) {
      toast('Evento Borrado', {
        type: 'error',
        autoClose: 2000
      });
      await deleteDoc(doc(db, 'events', id));
    }
  }

  const getEvents = () => {
    if (!user?.uid) return () => {};
    const q = query(collection(db, 'events'), where('user', '==', user.uid));
    return onSnapshot(q, (querySnapshot) => {
      const docs = [];
      querySnapshot.forEach(item => {
        docs.push({ ...item.data(), id: item.id })
      })
      setEvents(docs);
    });
  }

  useEffect(() => {
    const unsub = getEvents();
    return () => unsub && unsub();
  }, [user?.uid]);


  return (
    <React.Fragment>
      <CreateEvent {...{ addOrEditEvent, currentId, events }} />

      <div className="Events">
        <h2>Mis Casos Creados</h2>

        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>Caso</th>
              <th>Categoria</th>
              <th>SubCategoria</th>
              <th>Descripcion</th>
              <th>Creado</th>
              <th>Estado</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
            {events.map(event => (
              <tr key={event.id}>
                <th>{event.id.slice(-4)}</th>
                <th>{event.eventName}</th>
                <td>{event.eventType}</td>
                <td>{event.eventSub}</td>
                <td>{event.eventDesc}</td>
                <td>{event.create_at}</td>
                <td>
                  {event.status == 0 &&
                    <p>Pendiente</p>
                  }
                  {event.status == 1 &&
                    <p>En Curso</p>
                  }
                  {event.status == 2 &&
                    <p>Finalizado</p>
                  }
                </td>
                < th > <i className="material-icons text-danger" onClick={() => {
                  setCurrentId(event.id)
                }}>create</i></th>
              </tr>
            ))}
          </tbody>
        </table>

      </div >
    </React.Fragment >
  )
}
export default Events;
