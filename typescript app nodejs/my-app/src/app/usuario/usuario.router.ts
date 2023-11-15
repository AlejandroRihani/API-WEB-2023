import { Request, Response } from 'express';
import { Body, Controller, Delete, Get, Path, Post, Put, Request as TsoaRequest, Response as TsoaResponse, Route, Tags } from 'tsoa';
import { createTodo, readTodo, updateTodo, deleteTodo, ITodo } from './usuarios.service';

@Route('/api/usuarios')
@Tags('Usuarios')
export class UsuariosRouter extends Controller {

  // CREATE CONTROLLER
  @Post('/create')
  public async createUsuario(@Body() body: ITodo) {
    try {
      const result = await createTodo(body);
      this.setStatus(201); // Created
      return result;
    } catch (e) {
      this.setStatus(500); // Internal Server Error
      return { message: 'Internal Server Error' };
    }
  }

  // READ CONTROLLER
  @Get('/read')
  public async readUsuarios() {
    try {
      const result = await readTodo();
      return result;
    } catch (e) {
      this.setStatus(500); // Internal Server Error
      return { message: 'Internal Server Error' };
    }
  }

  @Get('/read/{usuarioId}')
  public async readUsuarioWithId(@Path('usuarioId') usuarioId: number) {
    try {
      const result = await readTodo(usuarioId);
      return result;
    } catch (e) {
      this.setStatus(500); // Internal Server Error
      return { message: 'Internal Server Error' };
    }
  }

  // UPDATE CONTROLLER
  @Put('/update')
  public async updateUsuario(@Body() body: { id: number } & ITodo) {
    try {
      const result = await updateTodo(body);
      return result;
    } catch (e) {
      this.setStatus(500); // Internal Server Error
      return { message: 'Internal Server Error' };
    }
  }

  // DELETE CONTROLLER
  @Delete('/delete/{usuarioId}')
  public async deleteUsuario(@Path('usuarioId') usuarioId: number) {
    try {
      const result = await deleteTodo(usuarioId);
      return result;
    } catch (e) {
      this.setStatus(500); // Internal Server Error
      return { message: 'Internal Server Error' };
    }
  }
}
