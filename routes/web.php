<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\ChartController;
use App\Http\Controllers\Admin\PageController;
use App\Http\Controllers\Admin\TableController;
use App\Http\Controllers\Author\AuthorController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\User\GeneralController;
use App\Http\Controllers\User\SportController;
use App\Http\Controllers\User\TechnologyController;
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


Route::post('/logout', 'Auth\LoginController@logout')->name('logout');

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
})->middleware(['admin'])->name('dashboard');



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
    Route::get('author/uploadnews', [AuthorController::class, 'upload_news'])->name('author.upload_news');
    Route::post('author/addnews', [AuthorController::class, 'add_news'])->name('author.add_news');
    Route::get('author/viewNews/{id}', [AuthorController::class, 'viewNews'])->name('author.viewNews');
    Route::get('author/updatenews/{id}', [AuthorController::class, 'update_news'])->name('author.update_news');
    Route::get('author/shownews', [AuthorController::class, 'show_data'])->name('author.shownews');
    Route::post('author/editform/{id}', [AuthorController::class, 'edit_form'])->name('author.editform');
    Route::get('author/delete/{id}', [AuthorController::class, 'delete'])->name('author.delete');
});

Route::middleware('user')->group(function () {
    Route::get('user/dashboard', [UserController::class, 'dashboard'])->name('user.dashboard');
    Route::get('user/general', [GeneralController::class, 'dashboard'])->name('user.general');
    Route::get('user/sports', [SportController::class, 'dashboard'])->name('user.sports');
    Route::get('user/technology', [TechnologyController::class, 'dashboard'])->name('user.technology');
    Route::get('user/travel', [TechnologyController::class, 'dashboard'])->name('user.travel');
    Route::get('user/business', [TechnologyController::class, 'dashboard'])->name('user.business');
    Route::get('user/enviornment', [TechnologyController::class, 'dashboard'])->name('user.enviornment');
});




Route::get('/message', function () {
    return Inertia::render('PageNotFound'); // Assuming 'NotFound' is your React 404 component
})->name('message');

// tables route
Route::get('/tables', function () {
    return Inertia::render('Tables');
})->name('tables');


require __DIR__.'/auth.php';
