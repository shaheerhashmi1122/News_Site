<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\ChartController;
use App\Http\Controllers\Admin\PageController;
use App\Http\Controllers\Admin\TableController;
use App\Http\Controllers\Author\AuthorController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\User\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Admin/Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware('admin')->group(function () {
    Route::get('admin/dashboard', [AdminController::class, 'dashboard'])->name('admin.dashboard');
    Route::get('admin/tables', [TableController::class, 'show'])->name('admin.tables');
    Route::get('admin/charts', [ChartController::class, 'show'])->name('admin.charts');
    Route::get('admin/pages', [PageController::class, 'show'])->name('admin.pages');
});

Route::middleware('author')->group(function () {
    Route::get('author/dashboard', [AuthorController::class, 'dashboard'])->name('author.dashboard');
});

Route::middleware('user')->group(function () {
    Route::get('user/dashboard', [UserController::class, 'dashboard'])->name('user.dashboard');
});
Route::get('/message',function(){
return "Ani deya Mzaak ay";
})->name('message');






// tables route
Route::get('/tables', function () {
    return Inertia::render('Tables');
})->name('tables');


require __DIR__.'/auth.php';
