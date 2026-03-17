import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Photo } from '../photo.model';
import { AlbumService } from '../album';

@Component({
  selector: 'app-album-photos',
  imports: [],
  templateUrl: './album-photos.html',
  styleUrl: './album-photos.css',
})
export class AlbumPhotos implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private albumService = inject(AlbumService);

  photos: Photo[] = [];
  albumId = 0;
  loading = true;

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbumPhotos(this.albumId).subscribe({
      next: (data) => {
        this.photos = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
  }

  goBack(): void {
    this.router.navigate(['/albums', this.albumId]);
  }
}
