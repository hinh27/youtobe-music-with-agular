import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  playlist = [
    {id: 'IcrbM1l_BoI', song: 'Avicii - Wake Me Up (Official Video)'},
    {id: 'FM7MFYoylVs', song: 'The Chainsmokers & Coldplay - Something Just Like This (Lyric)'},
  ];
  constructor() { }
  find(id: string) {
    return this.playlist.find(item => item.id === id);
  }
}
