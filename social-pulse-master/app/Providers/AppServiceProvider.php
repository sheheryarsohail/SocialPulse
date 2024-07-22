<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot()
    {
        \Illuminate\Support\Facades\Gate::define('viewMixpost', function ($user = null) {
            return optional($user)->email === 'email@example.com';
        });
    }
}
