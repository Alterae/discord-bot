export default interface command {
  name: string;
  aliases: string[];
  type: 'normal' | 'secret' | 'protected';
  execute: any; // TODO: Add function type signature.
}
