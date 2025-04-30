import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SupabaseService } from '../services/supabase.service';

export const logueadoGuard: CanActivateFn = async (route, state) => {
  const supabase = inject(SupabaseService);
  const router = inject(Router);

  if(await supabase.usuario === null) {
    router.navigateByUrl("/login");
    return false;
  } else { 
    return true;
  }
};
