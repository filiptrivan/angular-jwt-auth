import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, KeyValueDiffers, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/business/entities/generated/user.generated';
import { ApiService } from 'src/app/business/services/api/api.service';
import { BaseForm } from 'src/app/core/components/base-form/base-form';
import { SoftMessageService } from 'src/app/core/services/soft-message.service';

@Component({
    selector: 'user-details',
    templateUrl: './user-details.component.html',
    styles: [],
})
export class UserDetailsComponent extends BaseForm<User> implements OnInit {
    private routeSub: Subscription;

    constructor(
        protected override differs: KeyValueDiffers,
        protected override http: HttpClient,
        protected override messageService: SoftMessageService, 
        protected override changeDetectorRef: ChangeDetectorRef,
        private route: ActivatedRoute, 
        private router: Router, 
        private apiService: ApiService) 
        {
        super(differs, http, messageService, changeDetectorRef);
        }
         
    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.modelId = params['id'];
            if(this.modelId > 0){
                this.apiService.getUser(this.modelId).subscribe(res => {
                    this.init(new User(res));
                });
            }
            else{
                this.init(new User({id:0}));
            }
            
        });
    }
    
    init(model: User){
        this.initFormGroup(model);
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
