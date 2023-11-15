import { user } from '@entity/usuario';

export interface ITodo {
  nombre: string,
  correo_electronico: string,
  fecha_de_creacion: string,
  usuario_de_creacion: string,
  fecha_de_actualizacion: string,
  usuario_de_actualizacion: string,
  activo: number,
  numero_de_compras: number,
  campo_adicional: string,
}

// CREATE SERVICE
export const createTodo = async (todo: ITodo) => {
  try {
    const _newUser = new user();
    Object.assign(_newUser, todo);
    return await _newUser.save();
  } catch (e) {
    console.error(e);
  }
}

// READ SERVICE
export const readTodo = async (todoId?: number) => {
  try {
    if (todoId) {
      return await user.findOne(todoId);
    } else {
      return await user.find();
    }
  } catch (e) {
    console.error(e);
  }
}

// UPDATE SERVICE
export const updateTodo = async (userToUpdate: { id: number } & ITodo) => {
  try {
    const _foundUser = await user.findOne(userToUpdate.id);
    if (!_foundUser) return { message: "User is not found!" };

    Object.assign(_foundUser, userToUpdate);
    return await _foundUser.save();
  } catch (e) {
    console.error(e);
  }
}

// DELETE SERVICE
export const deleteTodo = async (todoId: number) => {
  try {
    const _foundUser = await user.findOne(todoId);
    if (!_foundUser) return { message: "User is not found!" };
    return await _foundUser.remove();
  } catch (e) {
    console.error(e);
  }
}
