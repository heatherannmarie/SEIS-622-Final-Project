import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private baseUrl = 'localhost:3000';
  constructor(private http: HttpClient) { }
  // Get all posts
  getPosts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/posts`);
  }
  // Get a single post by ID
  getPostById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/posts/${id}`);
  }
  // Create a new post
  createPost(post: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/posts`, post);
  }
  // Update a post
  updatePost(id: number, post: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/posts/${id}`, post);
  }
  // Delete a post
  deletePost(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/posts/${id}`);
  }
}