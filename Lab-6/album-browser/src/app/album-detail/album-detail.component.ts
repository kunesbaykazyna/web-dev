import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../services/album.service';
import { Album } from '../models/album.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css'] 
})
export class AlbumDetailComponent implements OnInit {

  album: Album | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService,
    private cdr: ChangeDetectorRef
  ) {}

 ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    const id = Number(params.get('id'));

    this.album = null; 

    this.albumService.getAlbum(id).subscribe(data => {
      this.album = data;
      this.cdr.detectChanges;
    });
  });
}
save() {
  if (!this.album) return;

  this.albumService.updateAlbum(this.album).subscribe();
}

  goBack() {
    this.router.navigate(['/albums']);
  }
}