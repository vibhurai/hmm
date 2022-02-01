/*
 * This is an example of an AssemblyScript smart contract with two simple,
 * symmetric functions:
 *
 * 1. setGreeting: accepts a greeting, such as "howdy", and records it for the
 *    user (account_id) who sent the request
 * 2. getGreeting: accepts an account_id and returns the greeting saved for it,
 *    defaulting to "Hello"
 *
 * Learn more about writing NEAR smart contracts with AssemblyScript:
 * https://docs.near.org/docs/develop/contracts/as/intro
 *
 */

import { Context, logging, storage } from 'near-sdk-as'
import { Note, Vector } from './modules'

@nearBindgen
export class Contract {
  private owner: string;
  private notes: Vector<Note> = new Vector<Note>('m');
  private message: Note;
  constructor(owner: string) {
    this.owner = owner;
  }

  // @mutateState()
  create(note: string): bool {
    // this.message = new Note(note);
    console.log("this.message.get()");
    return true;

  }

  list(): Array<Note> {
    return this.notes.get_all();
  }
}
