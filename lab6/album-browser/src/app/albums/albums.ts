import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Album } from '../album.model';
import { AlbumService } from '../album';

@Component({
  selector: 'app-albums',
  imports: [RouterLink],
  templateUrl: './albums.html',
  styleUrl: './albums.css',
})
export class Albums implements OnInit {
  private albumService = inject(AlbumService);

  albums: Album[] = [];
  loading = true;

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe({
      next: (data) => {
        this.albums = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
  }

  deleteAlbum(id: number, event: Event): void {
    event.stopPropagation();
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(a => a.id !== id);
    });
  }
}
